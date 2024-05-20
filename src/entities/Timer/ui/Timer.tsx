import React, { FC, useCallback, useEffect, useRef, useState } from "react";

import { ColorPlayer, Colors, Player } from "@shared/models";

import styles from "./styles.module.css";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

export const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const decrementWhiteTimer = (): void => {
    setWhiteTime((prev) => prev - 1);
  };

  const decrementBlackTimer = (): void => {
    setBlackTime((prev) => prev - 1);
  };

  const startTimer = useCallback((): void => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;

    timer.current = setInterval(callback, 1000);
  }, [currentPlayer?.color]);

  const handleRestart = (): void => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  useEffect(() => {
    startTimer();
  }, [currentPlayer, startTimer]);

  return (
    <div className={styles.Pannel}>
      <h3 style={{ color: "white" }}>
        Текущий игрок: {ColorPlayer[currentPlayer?.color || "White"]}
      </h3>

      <div className={styles.Actions}>
        <button
          type="button"
          onClick={handleRestart}
          className={styles.RestartButton}
        >
          Начать заново
        </button>

        <div className={styles.Timer}>
          <div>
            <h2>Черные</h2>
            <h3> {blackTime} сек.</h3>
          </div>
          <div>
            <h2>Белые </h2>
            <h3> {whiteTime} сек.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
