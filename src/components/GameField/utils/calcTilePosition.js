import { nrOfColumns } from '../constants/constants';

const tileRelativeWidth = 9.5;
const marginWidth = (nrOfColumns - tileRelativeWidth)*nrOfColumns/2;

export const calcTileFromTop = (index) => {
    const rowNr = Math.floor(index/nrOfColumns);
    return `${rowNr*tileRelativeWidth + marginWidth}%`;
};
export const calcTileFromLeft = (index) => {
    const colNr = index%nrOfColumns;
    return `${colNr*tileRelativeWidth + marginWidth}%`;
};