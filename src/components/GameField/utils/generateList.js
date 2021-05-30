import { shuffle } from './shuffle';
import { calcNrOfEachPlasticTypes } from './calcNrOfEachPlasticTypes';

const plasticNrPerType = calcNrOfEachPlasticTypes();

export const generateList = (howMany = plasticNrPerType) => {
    let fieldElems = [];
    for (let i = 0; i < howMany.length; i++) {
        for (let j = 0; j < howMany[i]; j++) {
            fieldElems.push(i);
        }
    }
    fieldElems = shuffle(fieldElems);
 
    return fieldElems.map((el, index) => ({position:index, value: el, pointValue: 0, aboutToMove: 0}));
};