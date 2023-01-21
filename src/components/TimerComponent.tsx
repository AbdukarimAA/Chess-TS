import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface ITimerComponentProps {
    currentPlayer: Player | null;
    restart: () => void;
}

const TimerComponent: FC<ITimerComponentProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer();
    }, [currentPlayer]);

    function startTimer() {
        if(timer.current) {
            clearInterval(timer.current);
        }

        const cb = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(cb, 1000);
    }

    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1);
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1);
    }

    const handleRestart = () => {
      setWhiteTime(300);
      setBlackTime(300);
      restart();
    };

    return (
        <div>
            <div>
                <button onClick={handleRestart}>Restart the game</button>
            </div>
            <h2>Black - {blackTime}</h2>
            <h2>White - {whiteTime}</h2>
        </div>
    );
};

export default TimerComponent;