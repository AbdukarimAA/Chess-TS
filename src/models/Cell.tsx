import {Figure} from "./figures/Figure";
import {Board} from "./Board";
import {Colors} from "./Colors";

export class Cell {
    // readonly x: number;
    // readonly y: number;
    // readonly color: Colors;
    // figure: Figure | null;
    // board: Board;
    available: boolean; //is it possible to move a figure
    id: number;

    constructor(public board: Board, readonly x: number, readonly y: number, public color: Colors, public figure: Figure | null) {
        this.available = false;
        this.id = Math.random();
    };

    isEmpty(): boolean {
        return this.figure === null;
    };

    isEnemy(target: Cell): boolean {
        if(target.figure) {
            return this.figure?.color !== target.figure.color;
        }
        return false;
    }

    isEmptyVertical(target: Cell): boolean {
        if(this.x !== target.x) {
            return false;
        }

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);
        for (let y = min + 1; y < max; y++) {
            if(!this.board.getCell(this.x, y).isEmpty()){
                return false;
            }
        }
        return true;
    };

    isEmptyHorizontal(target: Cell): boolean {
        if(this.y !== target.y) {
            return false;
        }

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);
        for (let x = min + 1; x < max; x++) {
            if(!this.board.getCell(x, this.y).isEmpty()){
                return false;
            }
        }
        return true;
    };

    /*
    * 1 1
    * 2 2
    * 3 3
    * the same difference on the diagonal cells
    * */
    isEmptyDiagonal(target: Cell): boolean {
        const absX = Math.abs(target.x - this.x);
        const absY = Math.abs(target.y - this.y);

        if(absY !== absX)
            return false;

        const directionX = this.x < target.x ? 1 : -1;
        const directionY = this.y < target.y ? 1 : -1;

        for (let i = 1; i < absY; i++) {
            if(!this.board.getCell(this.x + directionX * i, this.y + directionY * i).isEmpty())
                return false
        }
        return true;
    };

    setFigure(figure: Figure) {
      this.figure = figure;
      this.figure.cell = this;
    };

    addLostFigure(figure: Figure) {
        figure.color === Colors.BLACK ?
            this.board.lostBlackFigures.push(figure) :
            this.board.lostWhiteFigures.push(figure);
    }

    moveFigure(target: Cell) {
        if(this.figure && this.figure?.canMove(target)) { //if canMove returns true we can move a figure
            this.figure?.moveFigure(target);
            if(target.figure) {
                this.addLostFigure(target.figure)
            }
            target.setFigure(this.figure);
            this.figure = null;
        }
    };
}