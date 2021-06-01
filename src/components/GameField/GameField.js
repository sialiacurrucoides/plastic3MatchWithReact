import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './GameField.module.scss';
import { generateList } from './utils/generateList';
import { updateField } from './utils/updateField';
import Tile from './Tile/Tile';
import { tileStates, recyclablePlastic } from './constants/constants';
import detectPatterns from './utils/detectPatterns';
import sumPoints from './utils/sumPoints';
import { resultsActions } from '../../store/index';
import ShowMessage from './ShowMessage/ShowMessage';

const generateField = () => {
    let initialField = generateList();
    while (Number(sumPoints(detectPatterns(initialField))) !== 0){
        initialField = generateList();
    }
    return initialField;
};


const GameField = () => {
    const [field, setField] = useState(generateField());
    const dispatch = useDispatch();
    const isGameOn = useSelector(state => state.general.isOn);

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
            setField(prev => (detectPatterns(updateField(prev))));
        }, 300);
        console.log("CHANGED");
    };

    useEffect(() => {

        const points = sumPoints(detectPatterns(field));
        
        if (points > 0){
            dispatch(resultsActions.increaseScore(points));
            setTimeout(() => {
                setField(prev => (detectPatterns(updateField(prev))));
            }, 300);
        }

    },[field, dispatch]);

    useEffect(() => {
        if (isGameOn) setField(generateField());
    }, [isGameOn]);
    
    return (<div className={styles.gameField} >
            {!isGameOn && <ShowMessage />}
            {field.map(tile => <Tile 
            key={`tile${tile.position}`} 
            position={tile.position} 
            tileValue={tile.value} 
            aboutToMove={tile.aboutToMove}
            tileState={tile.pointValue > 0 && recyclablePlastic.includes(tile.value) ? tileStates[2] : tileStates[0]}
            onSwitch={handlePositionSwitch}
            onMouseUp={handleChange}
            />)}
        </div>);
};

export default GameField;