import { nrOfColumns } from '../constants/constants';

export const patternLengthsInColumn = (removeTiles) => {
    const diffs = removeTiles.map((pos, index) => removeTiles[index-1] ? pos - removeTiles[index-1] : nrOfColumns);
    
    // [10,10,30,10,10] -> index 2 indicates, the first group has two elements
    let patternLengths = diffs.reduce((acc, curr) => {
        if (curr !== nrOfColumns){
            const currIndex = diffs.indexOf(curr);
            if (acc.length === 0) return [currIndex];
            return [...acc, currIndex - acc[acc.length - 1]];
        }
        return acc;
    }, []); 
    patternLengths.push(removeTiles.length - patternLengths.reduce((acc, curr) => acc + curr, 0));
    
    return patternLengths;
};

const provideUpperTileOrRandom = (position, inheritTilePosition, field) => {
    
    const upperValue = field.find(el => el.position === inheritTilePosition);
    if (upperValue) return ({
        ...upperValue,
        position: position,
        aboutToMove: upperValue.aboutToMove + 1
    });
    return ({
        position: position,
        value: Math.floor(Math.random()*7),
        pointValue: 0,
        aboutToMove: Math.random()
    });
};

export const calcInheritedPosition = (tilesToRemoveFromRelevantColumn, tile) => {
    const patternLens = patternLengthsInColumn(tilesToRemoveFromRelevantColumn);
    
    let counter = 1;
    let positionShift = patternLens[patternLens.length - counter];
    let inheritedTilePosition = tile.position - nrOfColumns*positionShift;
    while (tilesToRemoveFromRelevantColumn.includes(inheritedTilePosition)){
        counter += 1;
        positionShift = positionShift + patternLens[patternLens.length - counter];
        inheritedTilePosition = tile.position - nrOfColumns*positionShift;
    }
    return inheritedTilePosition;
}

const calcNewField = (field, toRemoveByColumn, positionsToRemove) => {

    const columnsToModify = positionsToRemove.map(pos => pos%nrOfColumns);

    return field.map(tile => {

        const col = tile.position%nrOfColumns;
        const tilesToRemoveFromRelevantColumn = toRemoveByColumn[col];

        if (positionsToRemove.includes(tile.position) || 
        (columnsToModify.includes(col) && Math.max(...tilesToRemoveFromRelevantColumn) > tile.position)) {

            const inheritedTilePosition = calcInheritedPosition(tilesToRemoveFromRelevantColumn, tile);

            return provideUpperTileOrRandom(tile.position, inheritedTilePosition, field);
        }
        return tile;
    });
};


export const updateField = (field, removablePlasticList) => {
    const toRemoveByColumn = new Array(nrOfColumns);

    const positionsToRemove = field.reduce((acc, curr) => {
        if (curr.pointValue > 0 && removablePlasticList.includes(curr.value)) {
            const findAlready = toRemoveByColumn[curr.position%nrOfColumns] ? toRemoveByColumn[curr.position%nrOfColumns] : [];
            toRemoveByColumn[curr.position%nrOfColumns] = [...findAlready, curr.position];
            return [...acc, curr.position];
        }
        return acc;
    }, []);
    
    const newField = calcNewField(field, toRemoveByColumn, positionsToRemove);

    return newField;
};
