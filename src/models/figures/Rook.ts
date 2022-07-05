import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "./Figure";
import { FigureNames } from "./FigureNames";

import blackLogo from "../../assets/black-rook.png";
import whiteLogo from "../../assets/white-rook.png";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell); // это вызов конструктора родительского класса
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }
}
