import { useState } from 'react'
import Board from "./Board.jsx";
import {useSelector} from "react-redux";
import piecesService from './services/PiecesService';
import Piece from "./Piece";
import History from "./History.jsx";

function Game() {
    const configuration = useSelector((state) => (state.configuration));
  const [count, setCount] = useState(0)
  const reverse = false;

  return (
      <div className="game">
          <div className={'game-board ' + (configuration.autoflip ? 'reverse' : 'regular')}>
              <Board reverse={reverse}/>
              <div className="pieces">
                  {getPieces()}
              </div>
          </div>
          <History></History>
      </div>
      )
}

function getPieces () {
          const piecesPosition = useSelector((state) => (state.piecePosition));
          let pieces = [];
          Object.entries(piecesPosition).forEach((item, key) => {
          const position = item[0];
          const name = item[1];
          const color = name.substring(1, 2);
          const type = name.substring(0, 1);
          const fullName = piecesService.getPieceId(name, position);
          const piece = <Piece
            key={fullName}
            color={color}
            position={position}
            type={type}
            name={fullName}
        />;
    pieces.push(piece);
})
    ;
    return pieces;
}

export default Game
