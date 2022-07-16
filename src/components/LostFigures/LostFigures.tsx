import React, { FC } from "react";
import { Figure } from "../../models/figures";

import styles from "./styles.module.sass";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

export const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className={styles.Lost}>
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name}
          {figure.logo && (
            <img src={figure.logo} width={20} height={20} alt={figure.name} />
          )}
        </div>
      ))}
    </div>
  );
};
