import React from "react";
import { CreateNote } from "../../components/CreateNote";
import { ListNotes } from "../../components/ListNotes";
import "./style.css";

export function Home(): JSX.Element {
  return (
    <div className="container">
      <div className="create-note">
        <CreateNote />
      </div>
      <div className="list-notes">
        <ListNotes />
      </div>
    </div>
  );
}
