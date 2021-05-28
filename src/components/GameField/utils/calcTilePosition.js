import { nrOfColumns } from '../constants/constants';

export const calcTileFromTop = (index) => {
    const rowNr = Math.floor(index/nrOfColumns);
    return `${rowNr*9.5 + 2.5}%`;
};
export const calcTileFromLeft = (index) => {
    const colNr = index%nrOfColumns;
    return `${colNr*9.5 + 2.5}%`;
};