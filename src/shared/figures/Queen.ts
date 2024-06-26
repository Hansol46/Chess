import blackLogo from "@shared/assets/black-queen.png";
import whiteLogo from "@shared/assets/white-queen.png";

import { Cell } from "../models/Cell";
import { Colors } from "../models/Colors";
import { Figure } from "./Figure";
import { FigureNames } from "./FigureNames";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell); // это вызов конструктора родительского класса
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVertical(target)) {
      return true;
    }
    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
