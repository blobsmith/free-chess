import React from 'react';
import piecesService from './services/PiecesService';
import {useSelector} from "react-redux";

function handleClick(selectedPiece, position) {
    const nextPlayer = useSelector((state) => (state.nextPlayer));

    // White player play only white pieces.
    if (nextPlayer === this.props.color) {

        // If piece is selected, unselect it on next click.
        if (piecesService.getCurrentPosition(selectedPiece) === position) {
            this.props.unselect();
        }
        else {
            // If no piece has been selected, select it.
            this.props.select(this.props.name);
        }
    }
    else {
        if (selectedPiece !== '' && this.props.availableMovements.indexOf(position) !== -1) {
            // In case of Pawn, manage the promotion.
            // if (promotionService.promotionIsNeeded(selectedPiece, position)) {
            //     this.props.launchPawnPromotion();
            // }
            this.props.move(selectedPiece, position);
        }
    }
}

const Piece = ( {item, color, position, type, name} ) => {
    let selected = false; // todo
    const selectedPiece = useSelector((state) => (state.selectedPiece));
    const column = position.substring(0,1);
    const row = position.substring(1,2);
    const image = piecesService.getImage(name);
    return (
        <div
            key={item}
            className={'piece ' + 'row'+ row + ' column' + column + (selected ? ' square-selected' : '')}
        >
            <img src={image}  alt=""  />
            onClick={() => (handleClick(selectedPiece, position))}
        </div>
    )
};

export default Piece;