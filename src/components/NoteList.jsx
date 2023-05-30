import React, { useContext } from "react";
import { NoteContext  } from "../context/NoteContext"
import Note   from "./Note";

const NoteList = () => {
  const { notes } = useContext(NoteContext);
  

  return notes.map((note, index) => (
    <Note key={index} note={note}  />
  ))
}
export default NoteList;