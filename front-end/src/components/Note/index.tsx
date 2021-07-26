import { AxiosError } from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";

import styles from "./styles.module.css";

type NoteProps = {
  index: number;
  title: string;
  description: string;
  id: string;
};

export function Note({ title, description, id, index }: NoteProps): JSX.Element {
  const history = useHistory();

  function onDelete() {
    api
      .delete(`/note`, { data: { id: id } })
      .then(() => alert(`Anotação excluida com sucesso!`))
      .catch((error: AxiosError) => console.log(error));
    history.push("/");
  }

  return (
    <div key={index} className={styles.note}>
      <div className={styles.titulo}>
        <p>{title}</p>
      </div>
      <div className={styles.progress}></div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.btndelete}>
        <button className={styles.buttondelete} onClick={onDelete}>
          Excluir
        </button>
      </div>
    </div>
  );
}
