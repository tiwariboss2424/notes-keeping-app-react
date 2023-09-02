import React, { useEffect, useState } from "react";
import NoteComponent from "./components/NoteContainer/NoteContainer";
import SideBar from "./components/Sidebar/Sidebar";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-keeping-app")) || []
  );
  const AddNotes = (color) => {
    const tempnotes = [...notes];
    tempnotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color
    });
    setNotes(tempnotes);
  };
  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };
  //Data will be stored even after Reloding
  useEffect(() => {
    localStorage.setItem("notes-keeping-app", JSON.stringify(notes));
  });
  return (
    <div className="App">
      <SideBar AddNote={AddNotes} />
      <NoteComponent notes={notes} deleteNote={deleteNote} />
    </div>
  );
}
