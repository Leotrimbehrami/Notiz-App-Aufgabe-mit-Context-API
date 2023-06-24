import React, { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

const Note = ({ note }) => {
  const { deleteNote } = useContext(NoteContext);

  return(
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  )
}

export default Note;