import React, { FC } from "react";
import { Figure } from "../../models/figures";

import styles from "./styles.module.sass";

interface LostFiguresProps {
  figures: Figure[];
}

export const LostFigures: FC<LostFiguresProps> = ({ figures }) => {
  // console.log('figures',figures)
  // console.log('figures',figures?.[0]?.logo === figures?.[1]?.logo)
  return (
    <div className={styles.Lost}>
      <h3>Убитые фигуры:</h3>

      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.logo && (
            <img src={figure.logo} width={20} height={20} alt={figure.name} />
          )}
        </div>
      ))}
    </div>
  );
};
