import React from "react";

import styles from "./styles.module.css";

export function Note(): JSX.Element {
  return (
    <div className={styles.note}>
      <div className={styles.titulo}>
        <p>Teste</p>
      </div>
      <div className={styles.progress}></div>
      <div className={styles.description}>
        <p>Teste teste teste</p>
      </div>
    </div>
  );
}
