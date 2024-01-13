import React from "react";
import { NoteContextProvider } from "./contextes/NoteContext";
import NoteHack from "./pages/NoteHack";

function App() {
  return (
    <NoteContextProvider>
      <NoteHack />
    </NoteContextProvider>
  );
}

export default App;
