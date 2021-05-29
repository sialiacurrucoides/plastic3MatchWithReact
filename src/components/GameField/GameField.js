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
    console.log("points", sumPoints(field), "field", field);

    return (<div className={styles.gameField}>
            {field.map((tile, index) => <Tile 
            key={`tile${tile.position}`} 
            position={tile.position} 
            tileValue={tile.value} 
            tileState={tile.pointValue > 0 ? tileStates[2] : tileStates[0]}
            onSwitch={setField}
            />)}
        </div>);
};

export default GameField;