import React from 'react';
import piecesService from './services/PiecesService';
import {useSelector, useDispatch} from "react-redux";
import {pieceSelected, pieceUnselected} from "./reducers/pieceSelectedSlice.js";

const Piece = ( {item, color, position, type, name} ) => {
    const dispatch = useDispatch();
    const nextPlayer = useSelector((state) => (state.nextPlayer));
    const selectedPiece = useSelector((state) => (state.pieceSelected));
    const column = position.substring(0,1);
    const row = position.substring(1,2);
    const image = piecesService.getImage(name);

    const handleClick = () => {
        // White player play only white pieces.
        if (nextPlayer === color) {
            // Manage the selection of a piece.
            if (!selectedPiece.selectedPiece) {
                const action = {
                    selectedPiece: name
                };
                dispatch(pieceSelected(action));
            }
            else {
                // If piece is selected, unselect it on next click.
                if (piecesService.getCurrentPosition(selectedPiece.selectedPiece) === position) {
                    dispatch(pieceUnselected());
                }
                else {
                    const action = {
                        selectedPiece: name
                    };
                    dispatch(pieceSelected(action));
                }
            }
        }
        else {
            // Manage moving a piece.
            // if (selectedPiece.selectedPiece && this.props.availableMovements.indexOf(position) !== -1) {

                // In case of Pawn, manage the promotion.
                // if (promotionService.promotionIsNeeded(selectedPiece, position)) {
                //     this.props.launchPawnPromotion();
                // }
                // const action = {
                //     selected: selectedPiece.selectedPiece,
                //     position: position
                // };
                // dispatch(pieceMoved(action));
            // }
        }
    }

    return (
        <div
            key={item}
            className={'piece ' + 'row'+ row + ' column' + column + (selectedPiece.selectedPiece === name ? ' square-selected' : '')}
        >
            <img src={image}  alt="" onClick={handleClick} />
        </div>
    )
};

export default Piece;