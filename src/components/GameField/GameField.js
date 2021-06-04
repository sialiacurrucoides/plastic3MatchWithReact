import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './GameField.module.scss';
import { generateList } from './utils/generateList';
import { updateField } from './utils/updateField';
import Tile from './Tile/Tile';
import { tileStates } from './constants/constants';
import detectPatterns from './utils/detectPatterns';
import sumPoints from './utils/sumPoints';
import { resultsActions } from '../../store/index';
import ShowMessage from './ShowMessage/ShowMessage';
import checkIfNeighbour from './utils/checkIfNeighbour';
import calcNewPosition from './utils/calcNewPosition';
import { generalStateActions } from '../../store/index';

const generateField = (removablePlasticList) => {
    let initialField = generateList();
    while (Number(sumPoints(detectPatterns(initialField), removablePlasticList)) !== 0){
        initialField = generateList();
    }
    return initialField;
};

const GameField = () => {
    const removablePlasticList = useSelector(state => state.general.removablePlasticList);
    const initialField = generateField(removablePlasticList);
    const [field, setField] = useState(initialField);
    const dispatch = useDispatch();
    const isGameOn = useSelector(state => state.general.isOn);
    const isPaused = useSelector(state => state.general.isPaused);
    const highlightedPosition = useSelector(state => state.general.highlightedPosition);
    const [currentCoordinates, setCurrentCoordinates] = useState([null, null]);
    const startPosition = useRef(null);


    const handlePositionSwitch = (prevPosition, newPosition) => {
        const switchTile = field.find(tile => tile.position === newPosition);
        const currTile = field.find(tile => tile.position === prevPosition);

        setField(prev => detectPatterns(prev.map(tile => {

            if (tile.position === prevPosition) return ({
                position: tile.position,
                value: switchTile.value,
                pointValue: switchTile.pointValue,
                aboutToMove: tile.aboutToMove
            });
            if (tile.position === newPosition) return ({
                position: tile.position,
                value: currTile.value,
                pointValue: currTile.pointValue,
                aboutToMove: tile.aboutToMove
            });
            return tile;
        })));

    }


    const handleChange = () => {

        setTimeout(() => {
            setField(prev => (detectPatterns(updateField(prev, removablePlasticList))));
        }, 300);
       
    };

    const handleTileClick = (event) => {
        
        const currPosition = Number(event.target.dataset.id);
        if (currPosition > 0 && currPosition < 99){
            if (highlightedPosition === null) {
                dispatch(generalStateActions.setHighlightedPosition(currPosition));
            } else {
                if (!checkIfNeighbour(currPosition, highlightedPosition)) {
                    dispatch(generalStateActions.setHighlightedPosition(currPosition));
                }
                else {
                    handlePositionSwitch(currPosition, highlightedPosition);
                    dispatch(generalStateActions.setHighlightedPosition(null));
                }
            };
        }

    };

    const handleDragStart = (event) => {
        setCurrentCoordinates([event.pageX, event.pageY]);
        startPosition.current = Number(event.target.dataset.id);
    };

    const handleDragStop = (event) => {
        const diffX = currentCoordinates[0] - event.pageX;
        const diffY = currentCoordinates[1] - event.pageY;
        const position = startPosition.current;
        const newPosition = calcNewPosition(diffX, diffY, position);
        
        if (newPosition !== position){
            handlePositionSwitch(position, newPosition);
        }
    };

    const validatePositions = (position, newPosition) => {
        if (position && newPosition){
            return Math.abs(position-newPosition) === 1 || Math.abs(position - newPosition) === 10;
        }
        return false;
    }

    const handleTouchStop = (event) => {
        const currLocation = event.changedTouches[0];
        const currTarget = document.elementFromPoint(currLocation.clientX, currLocation.clientY);
        const newPosition = Number(currTarget.dataset.id);
        const position = Number(event.target.dataset.id);
        
        if (validatePositions(position, newPosition))
        {
            handlePositionSwitch(position, newPosition);
        }

    };

    useEffect(() => {

        const points = sumPoints(detectPatterns(field), removablePlasticList);
        
        if (points > 0){
            dispatch(resultsActions.increaseScore(points));
            setTimeout(() => {
                setField(prev => (detectPatterns(updateField(prev, removablePlasticList))));
            }, 300);
        }

    },[field, dispatch, removablePlasticList]);

    useEffect(() => {
        if (isGameOn) setField(generateField(removablePlasticList));
    }, [isGameOn, removablePlasticList]);

    
    return (<div className={styles.gameField} 
            onTouchStart={handleDragStart}
            onTouchEnd={handleTouchStop}
            onClick={handleTileClick}>
            {(!isGameOn || isPaused) && <ShowMessage />}
            {field.map(tile => <Tile 
            key={`tile${tile.position}`} 
            position={tile.position} 
            tileValue={tile.value} 
            aboutToMove={tile.aboutToMove}
            tileState={tile.pointValue > 0 && removablePlasticList.includes(tile.value) ? tileStates[2] : tileStates[0]}
            data-id={tile.position}
            onMouseUp={handleChange}
            onStart={handleDragStart}
            onStop={handleDragStop}
            />)}
        </div>);
};

export default GameField;