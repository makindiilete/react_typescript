import React, { useState } from "react";

interface NewNoteInputProps {
  //addNote(note: string): void;
  addNote: (note: string) => void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState<string>("");

  const handleUpdateNote: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setNote(event.currentTarget.value);
  };

  const handleOnAddNoteClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        type="text"
        name="note"
        placeholder="Note"
        value={note}
        onChange={handleUpdateNote}
      />
      <button onClick={handleOnAddNoteClick}>Add note</button>
    </div>
  );
};
