import {EFigureNames, Figure} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/king-b.png";
import whiteLogo from "../../assets/king-w.png";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = EFigureNames.KING;
    };

    canMove(target: Cell): boolean {
        return super.canMove(target);

        // if(!super.canMove(target))
        //     return false
        // return true
    }
}