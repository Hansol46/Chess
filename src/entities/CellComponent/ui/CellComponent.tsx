import cn from "classnames";
import React, { FC } from "react";

import { Cell, Colors } from "@shared/models";

import styles from "./styles.module.css";

interface CellComponentProps {
  cell: Cell;
  selected: boolean;
  onCellClick: (cell: Cell) => void;
}

/**
 * Ячейка
 */
export const CellComponent: FC<CellComponentProps> = ({
  cell,
  selected,
  onCellClick,
}) => (
  <div
    aria-hidden="true"
    className={cn(styles.Cell, {
      [styles.BlackCell]: cell.color === Colors.BLACK && !selected,
      [styles.WhiteCell]: cell.color === Colors.WHITE && !selected,
      [styles.AvailableCellForAttack]: cell.available && cell.figure,
      [styles.SelectedFigure]: selected,
    })}
    onClick={(): void => onCellClick(cell)}
  >
    {cell.available && !cell.figure && (
      <div className={styles.AvailableCellForMove} />
    )}

    {cell.figure?.logo && (
      <img src={cell.figure?.logo} alt={cell.figure.name} />
    )}
  </div>
);
