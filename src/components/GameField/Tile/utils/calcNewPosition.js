import { moveLimit, activateSwitch } from "../constants/constants";
import { nrOfColumns, nrElements } from "../../constants/constants";

const calcNewPosition = (diffX, diffY, position) => {
    if (Math.abs(diffX > moveLimit || diffY > moveLimit)){
        return position;
    }
    let newPosition;
    if (Math.abs(diffX) > activateSwitch && diffX > 0) newPosition = (position - 1);
    if (Math.abs(diffX) > activateSwitch && diffX < 0) newPosition = (position + 1);
    if (Math.abs(diffY) > activateSwitch && diffY > 0) newPosition = (position - nrOfColumns);
    if (Math.abs(diffY) > activateSwitch && diffY < 0) newPosition = (position + nrOfColumns);

    if (newPosition >= 0 && newPosition < nrElements) return newPosition;
    return position;
};

export default calcNewPosition;