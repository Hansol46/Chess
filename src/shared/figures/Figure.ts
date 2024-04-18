import logo from "@shared/assets/black-bishop.png";

import { Cell } from "../models/Cell";
import { Colors } from "../models/Colors";
import { FigureNames } from "./FigureNames";

export class Figure {
  color: Colors;

  logo: typeof logo | null; // поправить тип

  cell: Cell;

  name: FigureNames;

  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if (target?.figure?.color === this.color) {
      // console.log("target?.figure?.color", target?.figure?.color);
      // console.log("OPOP", target?.figure?.name);

      return false;
    }

    // if (target?.figure?.name === FigureNames.KING) {
    //   return false;
    // }
    return true;
  }

  // class-methods-use-this
  // eslint-disable-next-line class-methods-use-this
  moveFigure(target: Cell): void {}
}
