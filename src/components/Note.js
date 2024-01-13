import React from "react";
import NoteListe from "./NoteListe";
import HeaderNote from "./HeaderNote";

const Note = () => {
  return (
    <div className="bg-light p-3 py-4 rounded-3 ">
      <HeaderNote  />
      <NoteListe />
    </div>
  );
};

export default Note;
