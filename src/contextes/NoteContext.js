import React, { createContext, useContext, useEffect, useState } from "react";

const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [note, setNote] = useState("");
  const [idNoteEdit, setIdNoteEdit] = useState(false);

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "btn-1"
  );

  const themeChange = (theme) => {
    setTheme(theme);
  };

  const addNote = () => {
    if (note.trim()) {
      if (idNoteEdit !== false) {
        const updatedNotes = notes.map((noteEdit) =>
          noteEdit.id === idNoteEdit
            ? { ...noteEdit, note: note, date: new Date().toLocaleString() }
            : noteEdit
        );
        
        setNotes(updatedNotes);
        setIdNoteEdit(false);
        setNote("");
      } else {
        const newNote = {
          id: Math.random(),
          note: note,
          date: new Date().toLocaleString(),
        };
        setNotes([...notes, newNote]);
        setNote("");
      }
    }
  };

  const removeNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    if (idNoteEdit === id) {
      setIdNoteEdit(false);
      setNotes(updatedNotes);
      setNote("");
    } else {
      setNotes(updatedNotes);
    }
  };

  const editNote = (id) => {
    const editNote = notes.find((note) => note.id === id);
    setIdNoteEdit(id);
    setNote(editNote.note);
  };

  const clearAllNotes = () => {
    setNotes([]);
  };

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const getNumberOfNotes = notes.length;

  const value = {
    notes,
    note,
    idNoteEdit,
    theme,
    getNumberOfNotes,
    addNote,
    removeNote,
    editNote,
    clearAllNotes,
    handleChange,
    themeChange,
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [notes, theme]);

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export const useNoteContext = () => {
  return useContext(NoteContext);
};

// export const useNoteContext = () => {
//   return useContext(NoteContext)
// }
