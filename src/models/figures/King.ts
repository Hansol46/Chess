import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "./Figure";
import { FigureNames } from "./FigureNames";

import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell); // это вызов конструктора родительского класса
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    if (this.cell.isEmptyHorizontal(target)) {
      return dx === 1 || target.x === this.cell.x + 1;
    }

    if (this.cell.isEmptyVertical(target)) {
      return dy === 1 || target.y === this.cell.y + 1;
    }

    if (this.cell.isEmptyDiagonal(target)) {
      return dx === 1 && dy === 1;
    }

    return false;
  }
}
