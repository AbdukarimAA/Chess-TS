import {EFigureNames, Figure} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/queen-b.png";
import whiteLogo from "../../assets/queen-w.png";

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = EFigureNames.QUEEN;
    };

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false
        if(this.cell.isEmptyVertical(target))
            return true;
        if(this.cell.isEmptyHorizontal(target))
            return true;
        if(this.cell.isEmptyDiagonal(target))
            return true;
        return false

    }
}