export const nrOfColumns = 8;
export const nrOfRows = 8;
export const nrElements = nrOfColumns*nrOfRows;
export const tips = [
    "7 stands for 'other types' of plastic",
    "Metalized films usually cannot be recycled even if the plastic type is PP.",
    "You can use reusable bags for buying fruits and vegetables.",
    "Buying from the local market is more eco-friendly."
];
export const recyclablePlastic = [0, 1, 3, 4]; //1,2,4,5 but the numbering starts at 0
export const nonrecyclablePlastic = [2, 5, 6]; //corresponds to 3, 6, 7
export const nrPlastic = recyclablePlastic.length + nonrecyclablePlastic.length;
export const techScoreGoals = [70, 170, 300, 999, 9999];
export const timeLimit = 4 * 60 * 1000; // 4 minutes
export const plastic_freqs = [1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7, 1 / 7];
export const tileStates = ['normal', 'highlighted', 'shrinking'];
export const moveLimit = "40"; // px
export const activateSwitch = "28"; 