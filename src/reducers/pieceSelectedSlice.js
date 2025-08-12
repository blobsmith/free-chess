import { createSlice } from '@reduxjs/toolkit'

const initialState = '';

const pieceSelectedSlice = createSlice({
    name: 'pieceselected',
    initialState,
    reducers: {
        gameStarted(state, action) {
            state = '';
        },
        pieceSelected(state, action) {
            if (action.selectedPiece !== state) {
                state = action.selectedPiece;
            }
        },
        pieceUnselected(state, action) {
            state = '';
        },
        pieceMoved(state, action) {
            state = '';
        },
    }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {
    gameStarted,
    pieceSelected,
    pieceUnselected,
    pieceMoved,
} = pieceSelectedSlice.actions

// Export the slice reducer as the default export
export default pieceSelectedSlice.reducer