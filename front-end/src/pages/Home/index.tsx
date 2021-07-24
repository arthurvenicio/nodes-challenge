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
      <ListNotes />
    </div>
  );
}
