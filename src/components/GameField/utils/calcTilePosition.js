import { nrOfColumns } from '../constants/constants';
import styles from '../Tile/Tile.module.scss';

export const tileLength = Number(styles.tileWH.replace("%",""));

const occupied = 96; // %
export const widthPercent = occupied/nrOfColumns;
export const containerMargin = (100 - occupied)/2;
export const tilePadding = (widthPercent - tileLength)/2; 


export const calcTileFromTop = (index) => {
    const rowNr = Math.floor(index/nrOfColumns);
    return `${rowNr*widthPercent + containerMargin + tilePadding}%`;
};
export const calcTileFromLeft = (index) => {
    const colNr = index%nrOfColumns;
    return `${colNr*widthPercent + containerMargin + tilePadding}%`;
};