import { FC } from "react";
import cn from "classnames";

import { Cell } from "../../models";
import { Colors } from "../../models";

import styles from "./styles.module.sass";

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
}) => {

  return (
    <div
      className={cn(styles.Cell, {
        [styles.Black]: cell.color === Colors.BLACK && !selected,
        [styles.White]: cell.color === Colors.WHITE && !selected,
        [styles.Selected]: selected,
      })}
      style={{ background: cell.available && cell.figure ? "green" : "" }} // заменить
      onClick={() => onCellClick(cell)}
    >
      {cell.available && !cell.figure && <div className={styles.Available} />}
      {cell.figure?.logo && (
        <img src={cell.figure?.logo} alt={cell.figure.name} />
      )}
    </div>
  );
};
