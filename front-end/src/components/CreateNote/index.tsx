import React from "react";
import "./style.css";

export function CreateNote(): JSX.Element {
  return (
    <div className="slide">
      <div className="box-create">
        <div className="titulo">
          <h1 className="titulo">Bloco de Notas</h1>
        </div>
        <div className="form">
          <form>
            <div>
              <input type="text" placeholder="Assunto" />
            </div>
            <div>
              <input type="text" className="text" placeholder="Texto" />
            </div>
            <button id="button-orange" type="submit">
              CRIAR NOTA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
