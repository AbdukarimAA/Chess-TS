import {Colors} from "../Colors";
import logo from '../../assets/queen-b.png'
import {Cell} from "../Cell";

export enum EFigureNames {
    FIGURE = "Figure",
    KING = "King",
    KNIGHT = "Knight",
    PAWN = "Pawn",
    QUEEN = "Queen",
    ROOK = "Rook",
    BISHOP = "Bishop",
}

export class Figure {
    // color: Colors;
    // cell: Cell;
    logo: typeof logo | null;
    name: EFigureNames;
    id: number;

    constructor(public color: Colors, public cell: Cell) {
        this.cell.figure = this;
        this.logo = null;
        this.name = EFigureNames.FIGURE
        this.id = Math.random();
    };

    canMove(target: Cell) : boolean {
        if(target.figure?.color === this.color)
            return false
        if(target.figure?.name === EFigureNames.KING)
            return false
        return true
    };

    moveFigure(target: Cell) {

    };
}