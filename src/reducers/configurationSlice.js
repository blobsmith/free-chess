import { createSlice } from '@reduxjs/toolkit'

const STATUS_INTRO = 'intro';
const STATUS_GAME = 'game';
const STATUS_PENDING = 'pending';
const STATUS_OUTRO = 'outro';

const initialState = {
    autoflip: false,
    color: 'brown',
    helpmove: true,
    showcoordinates: true,
    language: 'en',
    status: STATUS_INTRO,
};

const configurationSlice = createSlice({
    name: 'configurations',
    initialState,
    reducers: {
        gameStarted(state, action) {
            const { autoflip, color, helpmove, status } = action.payload
            state.configurations.autoflip = autoflip;
            state.configurations.color = color;
            state.configurations.helpmove = helpmove;
            state.configurations.status = status;
        },
        gamePending(state, action) {
            state.configurations.status = STATUS_PENDING;
        },
        gameContinuing(state, action) {
            state.configurations.status = STATUS_GAME;
        },
        gameEnded(state, action) {
            state.configurations.status = STATUS_OUTRO;
        },
        gameIntroStarted(state, action) {
            state.configurations.status = STATUS_INTRO;
        },
    }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {
    gameStarted,
    gamePending,
    gameContinuing,
    gameEnded,
    gameIntroStarted
} = configurationSlice.actions

// Export the slice reducer as the default export
export default configurationSlice.reducer
