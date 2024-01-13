import React from "react";
import { useNoteContext } from "../contextes/NoteContext";
import Header from "../components/Header";
import Form from "../components/Form";
import Note from "../components/Note";

const NoteHack = () => {
  const { theme } = useNoteContext();
  return (
    <div className={`${theme} pt-3 p-4 min-vh-100`}>
      <Header />
      <Form />
      <Note />
    </div>
  );
};

export default NoteHack;
