import blackLogo from "@shared/assets/black-rook.png";
import whiteLogo from "@shared/assets/white-rook.png";

import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "./Figure";
import { FigureNames } from "./FigureNames";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell); // это вызов конструктора родительского класса
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    }
    if (this.cell.isEmptyVertical(target)) {
      return true;
    }
    return false;
  }
}
