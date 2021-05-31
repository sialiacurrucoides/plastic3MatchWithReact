import { createSlice, configureStore } from '@reduxjs/toolkit';
import { canvasTypes } from '../constants/constants';

const initialState = {isOn: false, canvasToShow: canvasTypes.intro1};

const generalStateSlice = createSlice({
    name: 'generalState',
    initialState,
    reducers: {
        startGame(state){
            state.isOn = true;
        },
        endGame(state){
            state.isOn = false;
        },
        updateCanvas(state, action){
            state.canvasToShow = action.payload;
        }
    }
});

const initialScoreState = {score: 0, record: 0};

const resultsSlice = createSlice({
    name: 'results',
    initialState: initialScoreState,
    reducers: {
        increaseScore(state, action){
            state.score += action.payload;
        },
        resetScore(state){
            state.score = 0;
        },
        updateRecord(state, action){
            state.record = action.payload;
        }
    }
});

const initalBadgesState = {badges: []};

const badgesSlice = createSlice({
    name: 'badges',
    initialState: initalBadgesState,
    reducers: {
        addBadge(state, action){
            state.badges.push(action.payload);
        }
    }

});

const store = configureStore({
    reducer: {
        results: resultsSlice.reducer,
        badges: badgesSlice.reducer,
        general: generalStateSlice.reducer,
    }
});

export const resultsActions = resultsSlice.actions;
export const badgesActions = badgesSlice.actions;
export const generalStateActions = generalStateSlice.actions;

export default store;