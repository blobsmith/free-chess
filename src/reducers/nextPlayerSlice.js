import { createSlice } from '@reduxjs/toolkit'
import piecesService from '../services/PiecesService';

const initialState = piecesService.WHITE_PIECE;

const nextPlayerSlice = createSlice({
    name: 'pieceselected',
    initialState,
    reducers: {
        gameStarted(state, action) {
            state = piecesService.WHITE_PIECE;
        },
        pieceMoved(state, action) {
            if (state === piecesService.WHITE_PIECE) {
                state = piecesService.BLACK_PIECE;
            }
            else {
                state = piecesService.WHITE_PIECE;
            }
        },
    }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {
    gameStarted,
    pieceMoved,
} = nextPlayerSlice.actions

// Export the slice reducer as the default export
export default nextPlayerSlice.reducer