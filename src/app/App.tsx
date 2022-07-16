import { useCallback, useEffect } from "react";
import { FC, useState } from "react";
import { Timer } from "../components";

import { BoardComponent } from "../components/BoardComponent";
import { LostFigures } from "../components/LostFigures/LostFigures";
import { Board, Colors, Player } from "../models";

import styles from "./styles.module.sass";

export const App: FC = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPLayer] = useState<Player | null>(null);

  const restartGame = (): void => {
    const newBoard = new Board();
    newBoard.initCell();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPLayer(whitePlayer);
  };

  const swapPlayer = useCallback(() => {
    setCurrentPLayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }, [currentPlayer?.color]);

  useEffect(() => {
    restartGame();
  }, []);

  return (
    <div className={styles.BoardWrapper}>
      <Timer currentPlayer={currentPlayer} restart={restartGame} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} />
        <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
};
