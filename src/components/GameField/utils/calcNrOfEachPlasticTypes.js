import { plastic_freqs, nrElements, nrPlastic } from '../constants/constants';

export const calcNrOfEachPlasticTypes = () => {
    let elemNrArray = [];
    plastic_freqs.forEach((curr) => {
        let elemNr = Math.floor(curr * nrElements);
        elemNrArray.push(elemNr);
    });
    const sumElem = elemNrArray.reduce((prev, cur) => prev + cur);
    if (sumElem < nrElements) {
        for (let i = 0; i < (nrElements - sumElem); i++) {
            const myrand = Math.floor(Math.random() * nrPlastic);
            elemNrArray[myrand]++; // increase the number of displayed plastic of the selected plastic type
        }
    }
    return elemNrArray;
};