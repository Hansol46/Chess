import React,{ FC, useState,useCallback, useEffect } from "react";

import { BoardComponent } from "@widgets/BoardComponent";
import { Timer } from "@entities/Timer";
import { Board, Colors, Player } from "@shared/models";

import styles from "./styles.module.sass";

export const Chess: FC = () => {
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
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />

      <Timer currentPlayer={currentPlayer} restart={restartGame} />
    </div>
  );
};
