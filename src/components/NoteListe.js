import React from "react";
import { useNoteContext } from "../contextes/NoteContext";
import Card from "./Card";

const NoteListe = () => {
  const { notes, removeNote, editNote } = useNoteContext();

  return (
    <div className="row justify-content-center gy-4 pb- pt-4 pb- p-3">
      {notes.map((note) => (
        <Card
          key={note.id}
          note={note}
          removeNote={removeNote}
          editNote={editNote}
        />
      ))}
    </div>
  );
};

export default NoteListe;



