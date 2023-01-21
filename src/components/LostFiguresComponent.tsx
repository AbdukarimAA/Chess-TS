import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface ILostFiguresProps {
    title: string;
    figures: Figure[]
}

const LostFiguresComponent: FC<ILostFiguresProps> = ({title, figures}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figure =>
                <div key={figure.id}>
                    {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} alt=""/>}
                </div>
            )}
        </div>
    );
};

export default LostFiguresComponent;