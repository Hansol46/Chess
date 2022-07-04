import { useEffect } from "react";
import { FC, useState } from "react";

import { BoardComponent } from "../components/BoardComponent";
import { Board } from "../models";

import styles from "./styles.module.sass";

export const App: FC = () => {
  const [board, setBoard] = useState(new Board());

  const restartGame = (): void => {
    const newBoard = new Board();
    newBoard.initCell();
    setBoard(newBoard);
  };

  useEffect(() => {
    restartGame();
  }, []);

  return (
    <div className={styles.BoardWrapper}>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};
