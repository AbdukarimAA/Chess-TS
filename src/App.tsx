import React, {useEffect, useState} from 'react';
import './App.css';
import {BoardComponent} from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFiguresComponent from "./components/LostFiguresComponent";
import TimerComponent from "./components/TimerComponent";

function App() {

    const [board, setBoard] = useState(new Board());
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null> (null);

    useEffect(() => {
        restart();
        setCurrentPlayer(whitePlayer);
    }, []);

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
    }

  return (
    <div className="App">
        <TimerComponent currentPlayer={currentPlayer} restart={restart} />
      <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
      />
        <div className="overall">
            <LostFiguresComponent
                title="Black figures"
                figures={board.lostBlackFigures}
            />
            <LostFiguresComponent
                title="White figures"
                figures={board.lostWhiteFigures}
            />
        </div>
    </div>
  );
}

export default App;
