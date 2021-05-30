import { recyclablePlastic, nrOfColumns } from '../constants/constants';

const patternLengthsInColumn = (removeTiles) => {
    const diffs = removeTiles.map((pos, index) => removeTiles[index-1] ? pos - removeTiles[index-1] : nrOfColumns);
    
    // [10,10,30,10,10] -> index 2 indicates, the first group has two elements
    let patternLengths = diffs.reduce((acc, curr) => {
        if (curr !== nrOfColumns){
            const currIndex = diffs.indexOf(curr);
            if (diffs.length === 1) return [...acc, currIndex, diffs.length - currIndex];
            const lastIndex = acc[acc.length - 1];
            return [...acc, currIndex - lastIndex]
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
        position: position
    });
    return ({
        position: position,
        value: Math.floor(Math.random()*7),
        pointValue: 0
    });
};


export const updateField = (field) => {
    const toRemoveByColumn = new Array(nrOfColumns);

    const positionsToRemove = field.reduce((acc, curr) => {
        if (curr.pointValue > 0 && recyclablePlastic.includes(curr.value)) {
            const findAlready = toRemoveByColumn[curr.position%nrOfColumns] ? toRemoveByColumn[curr.position%nrOfColumns] : [];
            toRemoveByColumn[curr.position%nrOfColumns] = [...findAlready, curr.position];
            return [...acc, curr.position];
        }
        return acc;
    }, []);

    const columnsToModify = positionsToRemove.map(pos => pos%nrOfColumns);
    
    const newField = field.map(tile => {
        const col = tile.position%nrOfColumns;
        const tilesFromRelevantcolumn = toRemoveByColumn[col];

        if (positionsToRemove.includes(tile.position) || 
        (columnsToModify.includes(col) && Math.max(...tilesFromRelevantcolumn) > tile.position)) {

                const patternLens = patternLengthsInColumn(tilesFromRelevantcolumn);
            
                let inheritedTilePosition = tile.position - nrOfColumns*patternLens[0];
                // TODO if there are multiple patterns
    
                return provideUpperTileOrRandom(tile.position, inheritedTilePosition, field);

        }

        return tile;

    });

    return newField;
};
