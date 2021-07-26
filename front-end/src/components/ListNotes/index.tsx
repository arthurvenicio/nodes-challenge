import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Note } from "../Note";
import styles from "./styles.module.css";

type Note = {
  title: string;
  description: string;
  id?: string;
};

export function ListNotes(): JSX.Element {
  const [data, setData] = useState<Note[]>();
  useEffect(() => {
    api
      .get(`/notes`)
      .then((response: AxiosResponse) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  if (!data) {
    return (
      <div id={styles.container}>
        <div className={styles.titulo}>
          <h2>Suas notas</h2>
        </div>

        <div className={styles.cards}>
          <p>Não tem notas</p>
        </div>
      </div>
    );
  }

  return (
    <div id={styles.container}>
      <div className={styles.titulo}>
        <h2>Suas notas</h2>
      </div>

      <div className={styles.cards}>
        {data.map(({ title, description, id }, index) => (
          <div key={index} className={styles.card}>
            <Note key={index} index={index} title={title} id={id} description={description} />
          </div>
        ))}
      </div>
    </div>
  );
}
