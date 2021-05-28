export const shuffle = (list) => {
    let positionToSwitch, x, currPosition;
    
    for (currPosition = list.length - 1; currPosition > 0; currPosition--) {
        positionToSwitch = Math.floor(Math.random() * (currPosition + 1));
        x = list[currPosition];
        list[currPosition] = list[positionToSwitch];
        list[positionToSwitch] = x;
    }
    return list;
};