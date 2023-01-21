import {Cell} from "../models/Cell";
import {FC} from "react";

interface ICellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void
}
export const CellComponent: FC<ICellProps> = ({cell, selected, click}) => {
    return (
        <div
            className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
            onClick={() => click(cell)}
            style={{background: cell.available && cell.figure ? 'rgb(71, 154, 185)' : ''}}
        >
            {cell.available && !cell.figure && <div className='available'></div>}

            {cell.figure?.logo && <img src={cell.figure.logo} alt="logo"/>}
        </div>
    )
};