import { createSlice } from '@reduxjs/toolkit'
import piecesService from '../services/PiecesService.js';

const initialState = {};

const previousMoveSlice = createSlice({
    name: 'previousmove',
    initialState,
    reducers: {
        wasMoved(state, action) {
            state = {
                to: action.payload.position,
                from: piecesService.getCurrentPosition(action.payload.selected),
            };
            return state;
        },
        resetPreviousMove() {
            return {};
        }
    }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {
    wasMoved,
    resetPreviousMove,
} = previousMoveSlice.actions

// Export the slice reducer as the default export
export default previousMoveSlice.reducer