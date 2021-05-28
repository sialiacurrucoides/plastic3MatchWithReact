import { calcTileFromTop, calcTileFromLeft } from '../utils/calcTilePosition';
import styles from './Tile.module.scss';

const Tile = ({tileValue, position, tileState}) => {
    const fromTop = calcTileFromTop(position);
    const fromLeft = calcTileFromLeft(position);

    return (<div className={styles.tile} 
            style={{top: fromTop, left: fromLeft, backgroundImage: `url("imgs/icon_${tileValue + 1}.png")`}}>
                
            </div>);
};

export default Tile;