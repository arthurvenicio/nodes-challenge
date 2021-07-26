import React from "react";

import styles from "./styles.module.css";

type NoteProps = {
  index: number;
  title: string;
  description: string;
  id?: string;
};

export function Note({ title, description, index }: NoteProps): JSX.Element {
  return (
    <div key={index} className={styles.note}>
      <div className={styles.titulo}>
        <p>{title}</p>
      </div>
      <div className={styles.progress}></div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
}
