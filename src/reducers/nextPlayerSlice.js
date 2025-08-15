import { createSlice } from '@reduxjs/toolkit'
import piecesService from '../services/PiecesService';

const initialState = piecesService.WHITE_PIECE;

const nextPlayerSlice = createSlice({
    name: 'pieceselected',
    initialState,
    reducers: {
        gameStarted(state) {
            state = piecesService.WHITE_PIECE;
            return state;
        },
        playerChanged(state) {
            if (state === piecesService.WHITE_PIECE) {
                state = piecesService.BLACK_PIECE;
            }
            else {
                state = piecesService.WHITE_PIECE;
            }
            return state;
        },
    }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {
    gameStarted,
    playerChanged,
} = nextPlayerSlice.actions

// Export the slice reducer as the default export
export default nextPlayerSlice.reducer