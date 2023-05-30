import React from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { NoteProvider } from './context/NoteContext';
import './App.css';
const App = () => {
  return (
    <NoteProvider>
      <h1>Note taking app</h1>
      <NoteForm />
      <NoteList />
    </NoteProvider>
  );
};

export default App;
