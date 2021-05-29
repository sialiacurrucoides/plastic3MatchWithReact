import React, {useState} from 'react';
import styles from './GameField.module.scss';
import { generateList } from './utils/generateList';
import Tile from './Tile/Tile';
import { tileStates } from './constants/constants';
import detectPatterns from './utils/detectPatterns';
import sumPoints from './utils/sumPoints';

let initialField = generateList();
while (Number(sumPoints(detectPatterns(initialField))) !== 0){
    initialField = generateList();
}

const GameField = () => {
    const [field, setField] = useState(initialField);

    const handlePositionSwitch = (prevPosition, newPosition) => {
        const switchTile = field.find(tile => tile.position === newPosition);
        const currTile = field.find(tile => tile.position === prevPosition);

        setField(prev => prev.map(tile => {
            if (tile.position === prevPosition) return ({
                position: tile.position,
                value: switchTile.value,
                pointValue: switchTile.pointValue
            });
            if (tile.position === newPosition) return ({
                position: tile.position,
                value: currTile.value,
                pointValue: currTile.pointValue
            });
            return tile;
        }));

    }
    
    return (<div className={styles.gameField}>
            {field.map(tile => <Tile 
            key={`tile${tile.position}`} 
            position={tile.position} 
            tileValue={tile.value} 
            tileState={tile.pointValue > 0 ? tileStates[2] : tileStates[0]}
            onSwitch={handlePositionSwitch}
            />)}
        </div>);
};

export default GameField;