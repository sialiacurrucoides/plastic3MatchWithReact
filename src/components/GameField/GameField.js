import React, {useState, useEffect} from 'react';
import styles from './GameField.module.scss';
import { generateList } from './utils/generateList';
import { updateField } from './utils/updateField';
import Tile from './Tile/Tile';
import { tileStates, recyclablePlastic } from './constants/constants';
import detectPatterns from './utils/detectPatterns';
import sumPoints from './utils/sumPoints';

let initialField = generateList();
while (Number(sumPoints(detectPatterns(initialField))) !== 0){
    initialField = generateList();
}

const GameField = () => {
    const [field, setField] = useState(initialField);
    const [score, setScore] = useState(0);

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
        setScore(sumPoints(field));
        setTimeout(() => {
            setField(prev => (detectPatterns(updateField(prev))));
        }, 300);
        console.log("CHANGED");
    };

    useEffect(() => {
        if (sumPoints(field) > 0) {
            setTimeout(() => {
                setField(prev => (detectPatterns(updateField(prev))));
            }, 300);
        }
    },[field]);
    
    return (<div className={styles.gameField} onMouseUp={handleChange}>
            {field.map(tile => <Tile 
            key={`tile${tile.position}`} 
            position={tile.position} 
            tileValue={tile.value} 
            aboutToMove={tile.aboutToMove}
            tileState={tile.pointValue > 0 && recyclablePlastic.includes(tile.value) ? tileStates[2] : tileStates[0]}
            onSwitch={handlePositionSwitch}
            />)}
        </div>);
};

export default GameField;