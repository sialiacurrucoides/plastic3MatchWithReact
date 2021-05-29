import { recyclablePlastic } from '../constants/constants';

const sumPoints = (list) => {
    return list.reduce((acc, curr) => {
        if (curr.pointValue > 0 && recyclablePlastic.includes(curr.value)) return acc + curr.pointValue;
        return acc;
    }, 0)
};

export default sumPoints;