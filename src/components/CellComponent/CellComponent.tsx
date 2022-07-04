import { FC } from "react";
import cn from "classnames";

import { Cell } from "../../models";
import { Colors } from "../../models";

import styles from "./styles.module.sass";

interface CellComponentProps {
  cell: Cell;
}

/**
 * Ячейка
 */
export const CellComponent: FC<CellComponentProps> = ({ cell }) => {
  return (
    <div
      className={cn(styles.Cell, {
        [styles.Black]: cell.color === Colors.BLACK,
        [styles.White]: cell.color === Colors.WHITE,
      })}
    ></div>
  );
};
