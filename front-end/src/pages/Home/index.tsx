import React from "react";
import { CreateNote } from "../../components/CreateNote";
import "./style.css";

export function Home(): JSX.Element {
  return (
    <div className="container">
      <div className="create-note">
        <CreateNote />
        <div className="test">
          <p>Teste</p>
        </div>
      </div>
    </div>
  );
}
