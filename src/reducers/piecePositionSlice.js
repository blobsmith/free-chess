import { createSlice } from '@reduxjs/toolkit'
import movementsService from '../services/MovementsService';
import promotionService from '../services/PromotionService';

const initialState = Object.assign({}, movementsService.initPiecesPosition);

const piecePositionSlice = createSlice({
    name: 'pieceposition',
    initialState,
    reducers: {
        gameStarted(state, action) {
            state = Object.assign({}, movementsService.initPiecesPosition);
        },
        pieceMoved(state, action) {
            state = movementsService.move(action.selectedPiece, action.toPosition, action.availableMovements, state);
        },
        pawnPromoted(state, action) {
            state = promotionService.promotion(action.pieceName, action.pieceType, state);
        },
    }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {
    gameStarted,
    pieceMoved,
    pawnPromoted,
} = piecePositionSlice.actions

// Export the slice reducer as the default export
export default piecePositionSlice.reducer