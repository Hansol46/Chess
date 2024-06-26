import blackLogo from "@shared/assets/black-bishop.png";
import whiteLogo from "@shared/assets/white-bishop.png";

import { Cell } from "../models/Cell";
import { Colors } from "../models/Colors";
import { Figure } from "./Figure";
import { FigureNames } from "./FigureNames";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell); // это вызов конструктора родительского класса
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}
