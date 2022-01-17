import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useDispatch, useSelector } from "react-redux";
import { NotesState } from "./redux/reducers/noteReducer";
import { noteAction } from "./redux/actions/noteAction";

const Note = () => {
  /*
    the first arg inside the angle bracket is the data type for the useSelector and the 2nd is its return value which is array of notes....
    useSelector<NotesState, NotesState["notes"]>()
    */
  const note = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  /*ds method is called to add our note*/
  const onAddNote = (note: string) => {
    dispatch(noteAction(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {note.map((note, index) => {
          return <li key={index}>{note}</li>;
        })}
      </ul>
    </>
  );
};

export default Note;
