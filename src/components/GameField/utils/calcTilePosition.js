import { nrOfColumns } from '../constants/constants';

const tileRelativeWidth = Math.floor(100/nrOfColumns) - 0.5; // 9.5;
const marginWidth = (Math.floor(100/nrOfColumns) - tileRelativeWidth)*Math.floor(100/nrOfColumns)/2;

export const calcTileFromTop = (index) => {
    const rowNr = Math.floor(index/nrOfColumns);
    return `${rowNr*tileRelativeWidth + marginWidth}%`;
};
export const calcTileFromLeft = (index) => {
    const colNr = index%nrOfColumns;
    return `${colNr*tileRelativeWidth + marginWidth}%`;
};