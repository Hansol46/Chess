import React, { FC } from "react";

import nonameUser from "@shared/assets/noname_user.png";
import { useLoginContext } from "@shared/context";
import { ColorPlayer, Colors } from "@shared/models";

import styles from "./styles.module.css";

interface PlayerMenuProps {
  playerColor: Colors;
}

export const PlayerMenu: FC<PlayerMenuProps> = ({ playerColor }) => {
  const { userName } = useLoginContext();
  const playerRole = playerColor === Colors.WHITE ? userName : "Игрок 2";
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
