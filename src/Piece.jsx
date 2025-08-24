import React from 'react';
import piecesService from './services/PiecesService';
import {useSelector, useDispatch} from "react-redux";
import {pieceSelected, pieceUnselected} from "./reducers/pieceSelectedSlice.js";
import {movesOfPieceSelected, moveReseted} from "./reducers/movementsSlice.js";
import {pieceMoved} from "./reducers/piecePositionSlice.js";
import {playerChanged} from "./reducers/nextPlayerSlice.js";
import {wasMoved} from "./reducers/previousMoveSlice.js";
import {historized} from "./reducers/historySlice.js";

const Piece = ( {item, color, position, type, name} ) => {
    const dispatch = useDispatch();
    const nextPlayer = useSelector((state) => (state.nextPlayer));
    const selectedPiece = useSelector((state) => (state.pieceSelected));
    const piecePosition = useSelector((state) => (state.piecePosition))
    const availableMovements = useSelector((state) => (state.availableMovements))
    const column = position.substring(0,1);
    const row = position.substring(1,2);
    const image = piecesService.getImage(name);

    const handleClick = () => {
        // White player play only white pieces.
        if (nextPlayer === color) {
            // Manage the selection of a piece.
            if (!selectedPiece.selectedPiece) {
                dispatchSelected(name, piecePosition);
            }
            else {
                // If piece is selected, unselect it on next click.
                if (piecesService.getCurrentPosition(selectedPiece.selectedPiece) === position) {
                    dispatch(pieceUnselected());
                    dispatch(moveReseted());
                }
                else {
                    dispatchSelected(name, piecePosition);
                }
            }
        }
        else {
            // Manage moving a piece.
            if (selectedPiece.selectedPiece && availableMovements.indexOf(position) !== -1) {

                // In case of Pawn, manage the promotion.
                // if (promotionService.promotionIsNeeded(selectedPiece, position)) {
                //     this.props.launchPawnPromotion();
                // }
                const action = {
                    selected: selectedPiece.selectedPiece,
                    position: position,
                    movements: availableMovements,
                    taken: name,
                };
                dispatch(historized(action));
                dispatch(pieceMoved(action));
                dispatch(wasMoved(action));
                dispatch(playerChanged());
                dispatch(moveReseted());
            }
        }
    }

    const dispatchSelected = (name, piecePosition) => {
        const action = {
            selectedPiece: name,
            piecePosition: piecePosition
        };
        dispatch(pieceSelected(action));
        dispatch(movesOfPieceSelected(action));
    }

    return (
        <div
            key={item}
            className={'piece ' + 'row' + row + ' column' + column + (selectedPiece.selectedPiece === name ? ' square-selected' : '') + ' color' +piecesService.getPieceColor(name)}
        >
            <img src={image} alt="" onClick={handleClick}/>
            <div className={'pieceLabel ' + 'piece' + type}>{piecesService.getPieceLabel(type)}</div>
        </div>
    )
};

export default Piece;