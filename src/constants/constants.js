export const canvasTypes = {
    intro1: 'intro1',
    intro2: 'intro2',
    intro3: 'intro3',
    startGame: 'startGame',
    gameOver: 'gameOver',
    selectTech: 'selectTech',
    congrat: 'congrat'
};

export const timeLimit = 1; // 4 minutes
export const techScoreGoals = [20, 60, 100, 9999]; // [70, 170, 300, 9999];
export const nonrecyclablePlasticInx = [2,5,6]; 
export const recyclablePlasticInx = [0,1,3,4];
export const badges = nonrecyclablePlasticInx.map(el => el + 1);