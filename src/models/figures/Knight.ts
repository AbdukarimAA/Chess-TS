import {EFigureNames, Figure} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/knight-b.png";
import whiteLogo from "../../assets/knight-w.png";

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = EFigureNames.KNIGHT;
    };

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false
        const directionX = Math.abs(this.cell.x - target.x);
        const directionY = Math.abs(this.cell.y - target.y);

        return (directionX === 1 && directionY === 2) || (directionX === 2 && directionY === 1);
    }
}