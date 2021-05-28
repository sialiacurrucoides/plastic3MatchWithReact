import styles from './GameField.module.scss';
import { generateList } from './utils/generateList';
import Tile from './Tile/Tile';

const GameField = () => {
    const initialField = generateList(); console.log(initialField);
    return (<div className={styles.gameField}>
            {initialField.map((tile, index) => <Tile key={`tile${index}`} position={index} tileValue={tile.value} tileState={tile.state} />)}
        </div>);
};

export default GameField;