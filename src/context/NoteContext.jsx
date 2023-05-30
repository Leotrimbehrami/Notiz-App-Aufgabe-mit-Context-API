import React, { useState, createContext } from "react";
import { useEffect } from "react";

export const NoteContext = createContext();



export const NoteProvider = ({ children }) => {
  const [notes,setNotes] = useState([]);


  // localStorage
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes')
    if(storedNotes) {
      console.log('Stored Notes:', storedNotes)
      setNotes(JSON.parse(storedNotes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (title,content) => {
    setNotes([...notes, 
      {
        id: crypto.randomUUID(),
        title,
        content }]);
      };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note !== id));
  };
  
  return(
    <NoteContext.Provider value={{ notes, addNote, deleteNote}}>
      {children}
    </NoteContext.Provider>
  )
}
