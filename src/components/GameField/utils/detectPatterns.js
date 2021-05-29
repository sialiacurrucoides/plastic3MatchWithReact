import { nrElements, nrOfColumns} from '../constants/constants';


const calculatePointValue = (list, index) => {

    const hasLeftMatch = (index -1 >= 0) && index%nrOfColumns !== 0 && list[index].value === list[index - 1].value;
    const hasRightMatch = (index + 1 < nrElements) && (index+1)%nrOfColumns !== 0 && list[index].value === list[index + 1].value;
    const hasAboveMatch = (index - nrOfColumns >= 0) && list[index].value === list[index - nrOfColumns].value;
    const hasBelowMatch = (index + nrOfColumns < nrElements) && list[index].value === list[index + nrOfColumns].value;

    if (!hasRightMatch && !hasLeftMatch && !hasAboveMatch && !hasBelowMatch) return 0;

    // the tile two steps apart should have a position between 0-99 and should not be in a new line
    const has2LeftMatch = (index -2 >= 0) && index%nrOfColumns !== 0 && (index - 2 + 1)%nrOfColumns !== 0 && hasLeftMatch && list[index].value === list[index - 2].value;
    const has2RightMatch = (index + 2 < nrElements) && (index+2)%nrOfColumns !== 0 && hasRightMatch && list[index].value === list[index + 2].value;
    const has2AboveMatch = (index - 2*nrOfColumns >= 0) && hasAboveMatch && list[index].value === list[index - 2*nrOfColumns].value;
    const has2BelowMatch = (index + 2*nrOfColumns < nrElements) && hasBelowMatch && list[index].value === list[index + 2*nrOfColumns].value;


    if ((has2AboveMatch && has2BelowMatch) || 
    (has2LeftMatch && has2RightMatch) || 
    (has2LeftMatch && has2AboveMatch) || 
    (has2AboveMatch && has2RightMatch) ||
    (has2RightMatch && has2BelowMatch) || 
    (has2BelowMatch && has2LeftMatch)) {
        return 3;
    }

    if ((hasLeftMatch && has2RightMatch) || 
    (hasRightMatch && has2LeftMatch) ||
    (hasAboveMatch && has2BelowMatch) || 
    (hasBelowMatch && has2AboveMatch)) {
        return 2;
    }

    if ((!hasLeftMatch && has2RightMatch) || 
    (!hasRightMatch && has2LeftMatch) || 
    (!hasAboveMatch && has2BelowMatch) || 
    (!hasBelowMatch && has2AboveMatch) ||
    (hasRightMatch && hasLeftMatch) || 
    (hasAboveMatch && hasBelowMatch)) {
        return 1;
    }





    return 0;

};

const detectPatterns = (list) => {

    const newList = list.map((plasticTile, index) => ({
        ...plasticTile,
        pointValue: calculatePointValue(list, index),
    }));
    return newList;
};

export default detectPatterns;