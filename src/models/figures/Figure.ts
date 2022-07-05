import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { FigureNames } from "./FigureNames";
import logo from "../../assets/black-bishop.png";

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
    return true;
  }

  moveFigure(target: Cell) {}
}
