import React, {useState, useEffect, useMemo} from 'react';
import { useSelector } from 'react-redux';

import { calcTileFromTop, calcTileFromLeft } from '../utils/calcTilePosition';
import styles from './Tile.module.scss';
import { tileStates } from '../constants/constants';
import {DraggableCore} from 'react-draggable';

const Tile = ({
    tileValue, 
    position, 
    tileState, 
    aboutToMove,
    onStart,
    onStop
}) => {
    
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

    
    useEffect(() => {
        setTileKey(prev => (`${prev}ch`))
    }, [aboutToMove]);

    
    return (
        <div
        className={styles.tileContainer} 
        key={tileKey}
        ref={nodeRef}
        data-id={position}
        style={{top: fromTop, left: fromLeft}}
        >
            <DraggableCore
            nodeRef={nodeRef}
            onStart={onStart}
            onStop={onStop}
            >
            <div className={classes}
                key={tileKey}
                ref={nodeRef}
                data-id={position}
                style={{backgroundImage: `url("imgs/icon_${tileValue + 1}.webp")`}}
                >
            </div>
            </DraggableCore>
        </div>
            );
};

export default Tile;