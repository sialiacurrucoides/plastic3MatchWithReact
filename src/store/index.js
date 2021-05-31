import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = {score: 0, record: 0};

const resultsSlice = createSlice({
    name: 'results',
    initialState,
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
        badges: badgesSlice.reducer
    }
});

export const resultsActions = resultsSlice.actions;
export const badgesActions = badgesSlice.actions;

export default store;