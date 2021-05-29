import React, {useState, useEffect} from 'react';
import { calcTileFromTop, calcTileFromLeft } from '../utils/calcTilePosition';
import styles from './Tile.module.scss';
import { tileStates } from '../constants/constants';
import {DraggableCore} from 'react-draggable';
import calcNewPosition from './utils/calcNewPosition';

const Tile = ({tileValue, position, tileState, onSwitch}) => {
    const [tileStyle, setTileStyle] = useState(tileState === tileStates[2] ? `${styles.tile} ${styles.shrinked}`: styles.tile);
    const [highlighted, setHighlighted] = useState(false);

    const fromTop = calcTileFromTop(position);
    const fromLeft = calcTileFromLeft(position);
    
    const nodeRef = React.useRef(null);


    const handleTileClick = () => {
        setHighlighted(prev => !prev);
    };

    let currentCoordinates = [null, null];

    const handleDragStart = (event) => {
        currentCoordinates = [event.pageX, event.pageY];
    };

    // const handleDrag = (event) => {
    //     console.log("drag is happening");
    // };

    const handleDragStop = (event) => {
        const diffX = currentCoordinates[0] - event.pageX;
        const diffY = currentCoordinates[1] - event.pageY;
        const newPosition = calcNewPosition(diffX, diffY, position);
        
        if (newPosition !== position){
            onSwitch(position, newPosition);
        }
        
    };

    useEffect(() => {
        if (highlighted) setTileStyle(`${styles.tile} ${styles.highlighted}`)
        else setTileStyle(`${styles.tile}`);
    }, [highlighted]);

    useEffect(() => {

    }, [position]);

    return (<DraggableCore
            nodeRef={nodeRef}
            onStart={handleDragStart}
            // onDrag={handleDrag}
            onStop={handleDragStop}
            >
            <div className={tileStyle}
                ref={nodeRef}
                style={{top: fromTop, left: fromLeft, backgroundImage: `url("imgs/icon_${tileValue + 1}.png")`}}
                onClick={handleTileClick}>
            </div>
            </DraggableCore>
            );
};

export default Tile;