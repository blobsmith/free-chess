import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {pieceMoved} from "./reducers/piecePositionSlice.js";
import {playerChanged} from "./reducers/nextPlayerSlice.js";
import {moveReseted} from "./reducers/movementsSlice.js";

function Square({letter, number, reverse, inverseResult}) {
    const dispatch = useDispatch();
    const position = getPosition(letter, number);
    const background = getBackground(letter, number, reverse, inverseResult);
    const configuration = useSelector((state) => (state.configuration));
    const selectedPiece = useSelector((state) => (state.pieceSelected));
    const availableMovements = useSelector((state) => (state.availableMovements))

    // const showdot = showDot(position);
    const showCoordinates = configuration['showcoordinates'];

    function handleMove() {
        if (selectedPiece.selectedPiece !== '' && availableMovements.indexOf(position) !== -1) {
            // In case of Pawn, manage the promotion.
            // if (promotionService.promotionIsNeeded(selectedPiece, position)) {
            //     this.props.launchPawnPromotion();
            // }
            const action = {
                selected: selectedPiece.selectedPiece,
                position: position,
                movements: availableMovements,
            };
            dispatch(pieceMoved(action));
            dispatch(playerChanged());
            dispatch(moveReseted());
        }
    }

    function showDot() {
        let showDot = false;
        if (configuration['helpmove']) {
            if (availableMovements.indexOf(position) !== -1 ) {
                showDot = true;
            }
        }
        return showDot;
    }


  return (
    <div
        id={position}
        className={'square ' + background}
        onClick={() => (handleMove())}
    >
        <div className={showDot() ? 'dot' : 'hidden'}></div>
        <div className={'square-letter ' + (showCoordinates ? 'show' : 'hidden')}>{getLetter(letter, number)}</div>
        <div className={'square-number ' + (showCoordinates ? 'show' : 'hidden')}>{getNumber(letter, number)}</div>
    </div>
    )
}

function getPosition(letter, number) {
    return letter + number;
}

function getLetter(letter, number) {
    if (number === '1') {
        return letter;
    }
    return '';
}

function getNumber(letter, number) {
    if (letter === 'A') {
        return number;
    }
    return '';
}

/**
 * Get color of the current Square.
 *
 * @param letter
 *      Letter of the current position.
 * @param number
 *      Number of the current position.
 * @param reverse
 *      Inverse the color of the current Square.
 * @param inverseResult
 *      Inverse the color of the current Square.
 *
 * @returns {string}
 *      Classname of the current Square color.
 */
function getBackground(letter, number, reverse, inverseResult = false) {
    const configuration = useSelector((state) => (state.configuration));
    let isDark = true;
    let className;
    if (reverse) {
        if (number%2 !== 0) {
            isDark = false;
        }
    }
    else {
        if (number%2 === 0) {
            isDark = false;
        }
    }

    if (isDark) {
        className = 'dark '+configuration.color;
        if (inverseResult) {
            className = 'light';
        }
    }
    else {
        className = 'light';
        if (inverseResult) {
            className = 'dark '+configuration.color;
        }
    }

    // const position = getPosition(letter, number);
    // if (this.props.lastMove.indexOf(position) !== -1) {
    //     className = className + ' last-move';
    // }
    return className;
}

function showDot(position) {
    let showDot = false;
    if (this.props.configuration['helpmove']) {
        if (this.props.availableMovements.indexOf(position) !== -1 ) {
            showDot = true;
        }
    }
    return showDot;
}

export default Square
