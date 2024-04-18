import React, { FC, useCallback, useEffect, useState } from "react";

import { BoardComponent } from "@widgets/BoardComponent";
import { Timer } from "@entities/Timer";
import { Figure, FigureNames } from "@shared/figures";
import { Board, Colors, Player } from "@shared/models";

import styles from "./styles.module.sass";

const isKing = (figure: Figure): boolean => figure.name === FigureNames.KING;

export const Chess: FC = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE)); // можно просто на переменную заменить
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK)); // можно просто на переменную заменить
  const [currentPlayer, setCurrentPLayer] = useState<Player | null>(null);

  const restartGame = useCallback((): void => {
    const newBoard = new Board();
    newBoard.initCell();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPLayer(whitePlayer);
  }, [whitePlayer]);

  const swapPlayer = useCallback(() => {
    setCurrentPLayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer,
    );
  }, [currentPlayer?.color]);

  useEffect(() => {
    if (
      board.lostWhiteFigures.find(isKing) ||
      board.lostBlackFigures.find(isKing)
    ) {
      restartGame();
    }
  }, [board.lostBlackFigures, board.lostWhiteFigures, restartGame]);

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
