import { combineReducers } from 'redux';
import configurationSlice from './configurationSlice.js';
import piecePositionSlice from './piecePositionSlice.js';
import pieceSelectedSlice from './pieceSelectedSlice.js';
import nextPlayerSlice from './nextPlayerSlice.js';
import movementsSlice from './movementsSlice.js';
import previousMoveSlice from './previousMoveSlice.js';

const chessReducers = combineReducers({
    configuration: configurationSlice,
    piecePosition: piecePositionSlice,
    pieceSelected: pieceSelectedSlice,
    nextPlayer: nextPlayerSlice,
    availableMovements: movementsSlice,
    previousMove: previousMoveSlice,
});

export default chessReducers;