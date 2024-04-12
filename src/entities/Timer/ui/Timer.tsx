import React,{ FC, useEffect, useRef, useState } from "react";
import { ColorPlayer, Colors, Player } from "@shared/models";

import styles from './styles.module.sass';

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

export const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  };

  const decrementWhiteTimer = () => {
    setWhiteTime((prev) => prev - 1);
  };

  const decrementBlackTimer = () => {
    setBlackTime((prev) => prev - 1);
  };

  const handleRestart = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  return (
    <div className={styles.Pannel}>
      <h3 style={{color:'white'}}>Текущий игрок: {ColorPlayer[currentPlayer?.color || "White"]}</h3>

      <div className={styles.Timer}>
        <button onClick={handleRestart} style={{width: '100%', padding: '8px', borderTopLeftRadius: '16px', borderTopRightRadius: '16px'}}>Начать заново</button>

        <div style={{ display: "flex", gap: '10px', justifyContent: 'space-around', margin: '15px 0px', }}>
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
