import {EFigureNames, Figure} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/rook-b.png";
import whiteLogo from "../../assets/rook-w.png";

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = EFigureNames.ROOK;
    };

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        if(this.cell.isEmptyHorizontal(target))
            return true
        return this.cell.isEmptyVertical(target);
    }
}