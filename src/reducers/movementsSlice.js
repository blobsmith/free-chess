import { createSlice } from '@reduxjs/toolkit'
import movementsService from '../services/MovementsService';
import enPassantService from '../services/EnPassantService';

const initialState = [];

const movementsSlice = createSlice({
    name: 'movements',
    initialState,
    reducers: {
        movesOfPieceSelected(state, action) {
            const selectedPiece = action.payload.selectedPiece;
            const piecePosition = action.payload.piecePosition;
            const enPassant = action.payload.enPassant;
            // const castling = action.payload.castling; todo : set caslting in getAvailableMovement

            // Get the available movements for the selected piece.
            let movements = movementsService.getAvailableMovement(selectedPiece, piecePosition); // , action.castling

            // Get the "en passant" movements for the selected piece if exists.
            // movements = enPassantService.addEnPassantToMovements(selectedPiece, action.enPassant, movements);

            state = movementsService.removeIllegalMovements(selectedPiece, piecePosition, movements);
            return state;
        },
        moveReseted(state) {
            state = [];
            return state;
        },
    }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {
    movesOfPieceSelected,
    moveReseted,
} = movementsSlice.actions

// Export the slice reducer as the default export
export default movementsSlice.reducer