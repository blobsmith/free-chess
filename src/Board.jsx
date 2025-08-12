import { useState } from 'react'
import Square from "./Square.jsx";
import {useSelector} from "react-redux";

function Board({reverse}) {
    let numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const configuration = useSelector((state) => (state.configuration));
    if (configuration.autoflip) { // && this.props.nextPlayer === piecesService.BLACK_PIECE
        reverse = true;
        numbers = numbers.reverse();
        letters = letters.reverse();
    }
    const squares = numbers.map((number, index) => (
        <div key={'row'+number} className={"board-row row-" + number} >
            { <Square letter={letters[0]} number={number} reverse={reverse} inverseResult={false} /> }
            { <Square letter={letters[1]} number={number} reverse={reverse} inverseResult={true} /> }
            { <Square letter={letters[2]} number={number} reverse={reverse} inverseResult={false} /> }
            { <Square letter={letters[3]} number={number} reverse={reverse} inverseResult={true} /> }
            { <Square letter={letters[4]} number={number} reverse={reverse} inverseResult={false} /> }
            { <Square letter={letters[5]} number={number} reverse={reverse} inverseResult={true} /> }
            { <Square letter={letters[6]} number={number} reverse={reverse} inverseResult={false} /> }
            { <Square letter={letters[7]} number={number} reverse={reverse} inverseResult={true} /> }
        </div>
    ));

  return (
      <div className="board-squares">
          {squares}
      </div>
  )
}
export default Board
