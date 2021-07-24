import React from "react";
import { Note } from "../Note";
import styles from "./styles.module.css";

export function ListNotes(): JSX.Element {
  return (
    <div id={styles.container}>
      <div className={styles.titulo}>
        <h2>Suas notas</h2>
      </div>

      <div className={styles.cards}>
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
}
