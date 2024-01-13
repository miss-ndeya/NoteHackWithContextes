import React from "react";
import { useNoteContext } from "../contextes/NoteContext";
import Title from "./Title";
import Button from "./Button";

const HeaderNote = () => {
  const { getNumberOfNotes, clearAllNotes } = useNoteContext();

  return (
    <div className="d-flex justify-content-between pb-4 pt-3 mb-3   border-bottom">
      <div className="d-flex align-items-center gap-2">
        <Title children="Notes" className="fs-5 fw-bold" />
        <Button
          className="p-auto btn btn-secondary rounded-circle border-0 hb  me-1 text-dark"
          children={getNumberOfNotes}
        />
      </div>
      <Button
        className=" btn btn-primary me-1 "
        children="Clear all"
        onClick={clearAllNotes}
      />
    </div>
  );
};

export default HeaderNote;
