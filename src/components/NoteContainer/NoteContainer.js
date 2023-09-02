import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";
const NoteComponent = (props) => {
  const ReverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };
  const notes = ReverseArray(props.notes);

  //delete NOte

  return (
    <>
      <div className="note-component-wrap custom-scroll">
        <h1
          style={{
            padding: "10px",
            background: "black",
            color: "white",
            width: "80%",
            margin: "auto",
            marginBottom: "10px"
          }}
        >
          Notes
        </h1>

        <div className="note-component-content">
          {notes.length > 0 ? (
            notes.map((value, index) => {
              return (
                <Note
                  note={value}
                  key={value.id}
                  deleteNote={props.deleteNote}
                />
              );
            })
          ) : (
            <h3>No Notes Present</h3>
          )}
        </div>
      </div>
    </>
  );
};
export default NoteComponent;
