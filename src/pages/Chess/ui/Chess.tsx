import React, { FC, useCallback, useEffect, useState } from "react";

import { BoardComponent } from "@widgets/BoardComponent";
import { Timer } from "@entities/Timer";
import { Board, ColorPlayer, Colors, Player } from "@shared/models";

import { isKing } from "../lib";

import styles from "./styles.module.sass";

const whitePlayer = new Player(Colors.WHITE);
const blackPlayer = new Player(Colors.BLACK);

export const Chess: FC = () => {
  const [board, setBoard] = useState(new Board());
  const [currentPlayer, setCurrentPLayer] = useState<Player | null>(null);

  const restartGame = useCallback((): void => {
    const newBoard = new Board();
    newBoard.initCell();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPLayer(whitePlayer);
  }, []);

  const swapPlayer = useCallback(() => {
    setCurrentPLayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer,
    );
  }, [currentPlayer?.color]);

  useEffect(() => {
    const isAnyKingDead = Boolean(
      board.lostWhiteFigures.find(isKing) ||
        board.lostBlackFigures.find(isKing),
    );

    if (!isAnyKingDead) {
      return;
    }

    restartGame();
    // eslint-disable-next-line no-alert
    alert(
      `Проиграл ${currentPlayer?.color ? ColorPlayer[currentPlayer?.color] : ColorPlayer.White} игрок`,
    );
  }, [board, currentPlayer?.color, restartGame]);

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
