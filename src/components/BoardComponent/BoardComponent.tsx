import { FC, Fragment } from "react";

import { CellComponent } from "../CellComponent";
import { Board } from "../../models";

import styles from "./styles.module.sass";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}

/**
 * Доска
 */
export const BoardComponent: FC<BoardComponentProps> = ({
  board,
  setBoard,
}) => {
  return (
    <div className={styles.Board}>
      {board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id} />
          ))}
        </Fragment>
      ))}
    </div>
  );
};
