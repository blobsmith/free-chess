import blackbishop from '../assets/images/pieces/black-bishop.png';
import whitebishop from '../assets/images/pieces/white-bishop.png';
import blackking from '../assets/images/pieces/black-king.png';
import whiteking from '../assets/images/pieces/white-king.png';
import blackknight from '../assets/images/pieces/black-knight.png';
import whiteknight from '../assets/images/pieces/white-knight.png';
import blackpawn from '../assets/images/pieces/black-pawn.png';
import whitepawn from '../assets/images/pieces/white-pawn.png';
import blackqueen from '../assets/images/pieces/black-queen.png';
import whitequeen from '../assets/images/pieces/white-queen.png';
import blackrook from '../assets/images/pieces/black-rook.png';
import whiterook from '../assets/images/pieces/white-rook.png';

class PiecesService {

    constructor() {
        /* Pieces definition */
        this.PAWN = 'P';
        this.ROOK = 'R';
        this.KNIGHT = 'N';
        this.BISHOP = 'B';
        this.QUEEN = 'Q';
        this.KING = 'K';

        /* Pieces color */
        this.WHITE_PIECE = 'w';
        this.BLACK_PIECE = 'b';
        this.images = {};
        this.images[this.PAWN+this.BLACK_PIECE] = blackpawn;
        this.images[this.PAWN+this.WHITE_PIECE] = whitepawn;
        this.images[this.ROOK+this.BLACK_PIECE] = blackrook;
        this.images[this.ROOK+this.WHITE_PIECE] = whiterook;
        this.images[this.BISHOP+this.BLACK_PIECE] = blackbishop;
        this.images[this.BISHOP+this.WHITE_PIECE] = whitebishop;
        this.images[this.KNIGHT+this.BLACK_PIECE] = blackknight;
        this.images[this.KNIGHT+this.WHITE_PIECE] = whiteknight;
        this.images[this.QUEEN+this.BLACK_PIECE] = blackqueen;
        this.images[this.QUEEN+this.WHITE_PIECE] = whitequeen;
        this.images[this.KING+this.BLACK_PIECE] = blackking;
        this.images[this.KING+this.WHITE_PIECE] = whiteking;
    }

    /**
     * Get the piece value.
     *
     * @param {string} pieceName
     *      the string definition of a piece.
     */
    getPieceValue = (pieceName) => {
        let value = 0;
        switch(this.getPieceType(pieceName)) {
            case this.PAWN:
                value = 1;
                break;

            case this.KNIGHT:
            case this.BISHOP:
                value = 3;
                break;

            case this.ROOK:
                value = 5;
                break;

            case this.QUEEN:
                value = 9;
                break;

            default:
                value = 0;
        }
        return value;
    }

    /**
     * Get the code of a Pawn
     *
     * @param {String} color
     *      Color of the pawn wanted.
     */
    getPawn = (color) => {
        return this.PAWN + color;
    }

    /**
     * Get the piece name, letter and color.
     *
     * @param {string} selectedPiece
     *      the string definition of a piece.
     */
    getPieceName = (selectedPiece) => {
        return selectedPiece.substring(0,2);
    }

    /**
     * Get the letter of a piece type.
     *
     * @param {string} selectedPiece
     *      the string definition of a piece.
     */
    getPieceType = (selectedPiece) => {
        return selectedPiece.substring(0,1);
    }

    /**
     * Get the piece color.
     *
     * @param {string} selectedPiece
     *      the string definition of a piece.
     */
    getPieceColor = (selectedPiece) => {
        return selectedPiece.substring(1,2);
    }

    /**
     * Get the current position of the piece, column and row.
     *
     * @param {string} selectedPiece
     *      the string definition of a piece.
     */
    getCurrentPosition = (selectedPiece) => {
        return selectedPiece.substring(3,5);
    }

    /**
     * Get only the column position of a piece.
     *
     * @param {string} selectedPiece
     *      the string definition of a piece.
     */
    getPositionColumn = (selectedPiece) => {
        let column = '';
        if (selectedPiece.length === 2) {
            column = selectedPiece.substring(0,1);
        }
        if (selectedPiece.length === 5) {
            column = selectedPiece.substring(3,4);
        }
        return column;
    }

    /**
     * Get only the row position of a piece.
     *
     * @param {string} selectedPiece
     *      the string definition of a piece.
     */
    getPositionRow = (selectedPiece) => {
        let row = '';
        if (selectedPiece.length === 2) {
            row = selectedPiece.substring(1,2);
        }
        if (selectedPiece.length === 5) {
            row = selectedPiece.substring(4,5);
        }
        return row;
    }

    /**
     * Get the id of a piece (name-position).
     *
     * @param {string} name
     *      the string name of a piece.
     * @param {string} position
     *      the string position of a piece.
     */
    getPieceId = (name, position) => {
        return name + '-' + position;
    }

    /**
     * True if the piece is a Pawn.
     *
     * @param {String} pieceName
     *      Name of the piece.
     */
    isPawn = (pieceName) => {
        let isPawn = false;
        if (this.getPieceType(pieceName) === this.PAWN) {
            isPawn = true;
        }
        return isPawn;
    }

    /**
     * True if the piece is a King.
     *
     * @param {String} pieceName
     *      Name of the piece.
     */
    isKing = (pieceName) => {
        let isKing = false;
        if (this.getPieceType(pieceName) === this.KING) {
            isKing = true;
        }
        return isKing;
    }

    /**
     * True if the piece is white.
     *
     * @param {String} pieceName
     *      Name of the piece.
     */
    isWhite = (pieceName) => {
        let isWhite = false;
        if (this.getPieceColor(pieceName) === this.WHITE_PIECE) {
            isWhite = true;
        }
        return isWhite;
    }

    /**
     * Get the label of a color from the color code.
     *
     * @param {String} color
     *      The color code
     */
    getColorLabel = (color) => {
        let label = '';
        if (color === piecesService.WHITE_PIECE) {
            label = 'Whites';
        }
        else {
            label = 'Blacks';
        }
        return label;
    }

    /**
     * Get a piece image from piece type and piece color.
     *
     * @param {String} name
     *      The name of the piece
     */
    getImage = (name) => {
        const color = this.getPieceColor(name);
        const type = this.getPieceType(name);
        return this.images[type+color]
    }
}


const piecesService = new PiecesService();
export default piecesService;