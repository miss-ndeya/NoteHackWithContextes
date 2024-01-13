import React from "react";
import { useNoteContext } from "../contextes/NoteContext";
import Button from "../components/Button";

const ThemeSelectionner = () => {
  const themes = ["btn-1", "btn-2", "btn-3", "btn-4", "btn-5", "btn-6"];

  const { onThemeChange, buttonPadding } = useNoteContext();

  return (
    <div>
      {themes.map((theme) => (
        <Button
          key={theme}
          className={`${buttonPadding} ${theme} rounded-circle bod border-0 btn me-1`}
          onClick={() => onThemeChange(theme)}
        />
      ))}
    </div>
  );
};

export default ThemeSelectionner;
