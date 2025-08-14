import { createSlice } from '@reduxjs/toolkit'

const initialState = {selectedPiece :''};

const pieceSelectedSlice = createSlice({
    name: 'pieceselected',
    initialState,
    reducers: {
        gameStarted(state) {
            state.selectedPiece = '';
            return state;
        },
        pieceSelected(state, action) {
            state = action.payload;
            return state;
        },
        pieceUnselected(state) {
            state = {selectedPiece:''};
            return state;
        },
    }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {
    gameStarted,
    pieceSelected,
    pieceUnselected,
} = pieceSelectedSlice.actions

// Export the slice reducer as the default export
export default pieceSelectedSlice.reducer