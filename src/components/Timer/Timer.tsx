import { FC, useEffect, useRef, useState } from "react";
import { Colors, Player } from "../../models";

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
    restart()
  };

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  );
};
