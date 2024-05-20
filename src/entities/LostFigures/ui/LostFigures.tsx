import React, { FC } from "react";

import { Figure } from "@shared/figures";

import styles from "./styles.module.css";

interface LostFiguresProps {
  figures: Figure[];
}

/**
 * Компонент отображающий убитые фигуры
 */
export const LostFigures: FC<LostFiguresProps> = ({ figures }) => (
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
