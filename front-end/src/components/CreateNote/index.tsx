import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import "./style.css";

const initValue = {
  title: "",
  description: "",
};

export function CreateNote(): JSX.Element {
  const [values, setValues] = useState(initValue);
  const history = useHistory();

  function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;

    const newDate = { ...values, [name]: value };

    setValues(newDate);
    console.log(values);
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();

    // console.log(values);
    api
      .post("/note", values)
      .then(() => alert(`A nota foi criada com sucesso!`))
      .catch(function (error) {
        console.error(error);
      });
  }

  function Redirect() {
    history.push("/notes");
  }

  return (
    <div className="slide">
      <div className="box-create">
        <div className="titulo">
          <h1 className="titulo">Bloco de Notas</h1>
        </div>
        <div className="form">
          <form onSubmit={onSubmit}>
            <div>
              <input type="text" name="title" placeholder="Assunto" onChange={onChange} required />
            </div>
            <div>
              <input type="text" className="text" name="description" placeholder="Texto" maxLength={110} onChange={onChange} required />
            </div>
            <button className="button-orange" type="submit">
              CRIAR NOTA
            </button>
            <button className="button-orange2" onClick={Redirect} type="submit">
              VER NOTAS
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
