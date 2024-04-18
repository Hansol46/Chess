import React, { FC, Fragment, useEffect, useState } from "react";

import { CellComponent } from "@entities/CellComponent";
import { LostFigures } from "@entities/LostFigures";
import { PlayerMenu } from "@entities/PlayerMenu";
import { Board, Cell, Colors, Player } from "@shared/models";

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
  const updateBoard = (): void => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  const highlightCells = (): void => {
    board.highlightCells(selectedCell);
    updateBoard();
  };

  useEffect(() => {
    highlightCells();
    // eslint-disable-next-line
  }, [selectedCell]);

  const onCellClick = (cell: Cell): void => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
      return;
    }

    if (cell.figure?.color === currentPlayer?.color) {
      setSelectedCell(cell);
    }
  };

  return (
    <div>
      <PlayerMenu playerColor={Colors.BLACK} />

      <LostFigures figures={board.lostWhiteFigures} />

      <div className={styles.Board}>
        {board.cells.map((row, index) => (
          // eslint-disable-next-line react/no-array-index-key
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

      <LostFigures figures={board.lostBlackFigures} />

      <PlayerMenu playerColor={Colors.WHITE} />
    </div>
  );
};
