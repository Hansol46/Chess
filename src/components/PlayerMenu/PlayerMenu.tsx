import { FC } from "react";
import nonameUser from "../../assets/noname_user.png";
import { ColorPlayer, Colors } from "../../models";

import styles from "./styles.module.sass";

interface PlayerMenuProps {
  playerColor: Colors;
}

export const PlayerMenu: FC<PlayerMenuProps> = ({ playerColor }) => {
  const playerRole = playerColor === Colors.WHITE ? "Игрок 1" : "Игрок 2";
  const playerName = `${playerRole} ${
    playerColor && `(${ColorPlayer[playerColor]})`
  }`;

  return (
    <div className={styles.PlayerMenu}>
      <img src={nonameUser} alt="noname_user" width="64" height="64" />

      <div className={styles.PlayerMenuInfo}>
        <div>{playerName}</div>
        <div>Сыгранно матчей: 2</div>
        <div>Побед: 1</div>
      </div>
    </div>
  );
};
