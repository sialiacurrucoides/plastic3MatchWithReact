import { nrOfColumns, nrElements } from '../constants/constants';

const checkIfNeighbour = (position, highlightedPosition) => {
    const isToLeft = (position - 1) === highlightedPosition && (highlightedPosition % nrOfColumns) !== 0;
    const isToRight = (position + 1) === highlightedPosition && (highlightedPosition +1 %nrOfColumns) !== 0;
    const isUpper = (position - nrOfColumns) === highlightedPosition && (highlightedPosition > 0);
    const isLower = (position + nrOfColumns) === highlightedPosition && (highlightedPosition < nrElements);
    
    return (isToLeft || isToRight || isUpper || isLower);
}

export default checkIfNeighbour;