import { FC, Fragment, useEffect, useState } from "react";

import { CellComponent } from "../CellComponent";
import { Board, Cell, Player } from "../../models";
import { LostFigures } from "../LostFigures";

import styles from "./styles.module.sass";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}



/**
 * Доска
 */
export const BoardComponent: FC<BoardComponentProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highlightCells();
    // eslint-disable-next-line
  }, [selectedCell]);

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  const onCellClick = (cell: Cell) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
      // updateBoard(); Нуждно ли?
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  };

  return (
    <div className={styles.BoardContainer}>
      <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} />

      <div className={styles.Board}>
        {board.cells.map((row, index) => (
          <Fragment key={index}>
            {row.map((cell) => (
              <CellComponent
                key={cell.id}
                cell={cell}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell?.y
                }
                onCellClick={onCellClick}
              />
            ))}
          </Fragment>
        ))}
      </div>

      <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} />
    </div>
  );
};
