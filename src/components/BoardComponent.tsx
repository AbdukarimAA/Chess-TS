import {Board} from "../models/Board";
import React, {FC, useEffect, useState} from "react";
import {CellComponent} from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface IBoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}
export const BoardComponent: FC<IBoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
            updateBoard();
        } else {
            if(cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell);
            }
        }

        if(!cell.figure) {
            setSelectedCell(null);
            alert('You can click on a cell with a figure only!');
        }
    }

    useEffect(() => {
        highLightCells();
    }, [selectedCell]);

    function highLightCells() {
        board.highLightCell(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div>
            Current Player {currentPlayer?.color}
            <div className="board">
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent
                                click={click}
                                cell={cell}
                                selected={cell.x === selectedCell?.x && cell.y ===selectedCell.y}
                                key={cell.id}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
};