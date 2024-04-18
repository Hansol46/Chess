import { Figure, FigureNames } from "@shared/figures";

export const isKing = (figure: Figure): boolean =>
  figure.name === FigureNames.KING;
