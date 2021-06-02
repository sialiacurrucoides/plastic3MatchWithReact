import React, {useState, useEffect, useMemo} from 'react';
import { useSelector } from 'react-redux';

import { calcTileFromTop, calcTileFromLeft } from '../utils/calcTilePosition';
import styles from './Tile.module.scss';
import { tileStates } from '../constants/constants';
import {DraggableCore} from 'react-draggable';
import calcNewPosition from './utils/calcNewPosition';

const Tile = ({
    tileValue, 
    position, 
    tileState, 
    onSwitch, 
    aboutToMove,
}) => {

    const [transformAmount, setTransformAmount] =useState(`translate(0px,0px)`);
    const [currentCoordinates, setCurrentCoordinates] = useState([null, null]);
    const [tileKey, setTileKey] = useState(`${tileValue}`);

    const highlightedPosition = useSelector(state => state.general.highlightedPosition);

    const classes = useMemo(() => {
        if (position === highlightedPosition) return `${styles.tile} ${styles.highlighted} ${styles.enterAnimation}`;
        if (tileState === tileStates[2]) return `${styles.tile} ${styles.fading} ${styles.enterAnimation}`;
        return `${styles.tile} ${styles.enterAnimation}`;
    }, [tileState, position, highlightedPosition]);

    const fromTop = calcTileFromTop(position);
    const fromLeft = calcTileFromLeft(position);
    
    const nodeRef = React.useRef(null);


    const handleDragStart = (event) => {
        setCurrentCoordinates([event.pageX, event.pageY]);
    };

    const handleDrag = (event) => {
        const diffX = event.pageX - currentCoordinates[0];
        const diffY = event.pageY - currentCoordinates[1];

        setTransformAmount(`translate(${diffX}px, ${diffY}px)`);
    };

    const handleDragStop = (event) => {
        const diffX = currentCoordinates[0] - event.pageX;
        const diffY = currentCoordinates[1] - event.pageY;
        const newPosition = calcNewPosition(diffX, diffY, position);
        
        if (newPosition !== position){
            onSwitch(position, newPosition);
        }
        setTransformAmount(`translate(0px,0px)`);
    };
    
    useEffect(() => {
        setTileKey(prev => (`${prev}ch`))
    }, [aboutToMove]);

    
    return (<DraggableCore
            nodeRef={nodeRef}
            // touchStart={handleDragStart}
            // touchEnd={handleDragStop}
            // touchMove={handleDrag}
            onStart={handleDragStart}
            onDrag={handleDrag}
            onStop={handleDragStop}
            >
            <div className={classes}
                key={tileKey}
                ref={nodeRef}
                data-id={position}
                style={{top: fromTop, left: fromLeft, transform: transformAmount, backgroundImage: `url("imgs/icon_${tileValue + 1}.png")`}}
                >
            </div>
            </DraggableCore>
            );
};

export default Tile;