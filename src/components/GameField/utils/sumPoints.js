
const sumPoints = (list,removablePlasticList) => {
    return list.reduce((acc, curr) => {
        if (curr.pointValue > 0 && removablePlasticList.includes(curr.value)) return acc + curr.pointValue;
        return acc;
    }, 0)
};

export default sumPoints;