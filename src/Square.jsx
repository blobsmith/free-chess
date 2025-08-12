import { useState } from 'react'
import { useSelector} from 'react-redux';

function Square({letter, number, reverse, inverseResult}) {
    const position = getPosition(letter, number);
    const background = getBackground(letter, number, reverse, inverseResult);
    const configuration = useSelector((state) => (state.configuration));
    // const showdot = showDot(position);
    const showCoordinates = configuration['showcoordinates'];
  return (
    <div
        id={position}
        className={'square ' + background}
        // onClick={() => (handleMove(position))}
    >
        {/*<div className={showdot ? 'dot' : 'hidden'}></div>*/}
        <div className={'square-label ' + (showCoordinates ? 'show' : 'hidden')}>{position}</div>
    </div>
    )
}

function handleMove(position) {
    if (this.props.selectedPiece !== '' && this.props.availableMovements.indexOf(position) !== -1) {
        // In case of Pawn, manage the promotion.
        if (promotionService.promotionIsNeeded(this.props.selectedPiece, position)) {
            this.props.launchPawnPromotion();
        }
        this.props.move(this.props.selectedPiece, position);

    }
}

function getPosition(letter, number) {
    return letter + number;
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
