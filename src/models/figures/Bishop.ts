import {EFigureNames, Figure} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import whiteLogo from '../../assets/bishop_w.png';
import blackLogo from '../../assets/bishop_b.png';

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = EFigureNames.BISHOP;
    };

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false
        return this.cell.isEmptyDiagonal(target);
    }
}