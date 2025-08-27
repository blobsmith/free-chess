import { createSlice } from '@reduxjs/toolkit'
import piecesService from '../services/PiecesService.js';

const initialState = new Array();

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        historized(state, action) {
            const step = {
                from: piecesService.getCurrentPosition(action.payload.selected),
                to: action.payload.position,
                piece: piecesService.getPieceName(action.payload.selected),
                taken: piecesService.getPieceName(action.payload.taken),
                move: getMove(action.payload.selected, action.payload.position, action.payload.taken)
            };
            state = setInState(state, step);
            return state;
        },
        resetHistory(state) {
            state = [];
            return state;
        },
    }
})

function setInState(state, step) {
    const historyLength = state.length;
    const lastStep = state[historyLength - 1];
    if (lastStep && lastStep.length === 1) {
        lastStep.push(step);
        state[historyLength - 1] = lastStep;
    }
    else {
        state.push(new Array(step));
    }
    return state;
}

function getMove(selected, position, taken) {
    const type = piecesService.getPieceType(selected);
    return (type !== 'P' ? type : '') + (taken ? 'x': '') + position.toLowerCase();
}

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {
    historized,
    resetHistory,
} = historySlice.actions

// Export the slice reducer as the default export
export default historySlice.reducer