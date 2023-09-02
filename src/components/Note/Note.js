import React from "react";
import "./Note.css";
import { MdDeleteForever } from "react-icons/md";
const Note = ({ note, deleteNote }) => {
  const formateDate = (value) => {
    if (!value) return;
    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "july",
      "August",
      "Sept",
      "October",
      "Nov",
      "Dec"
    ];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";

    hrs = hrs ? hrs : "12"; // if hrs is 0 , 12 will be shown;
    hrs = hrs > 12 ? 24 - hrs : hrs;

    let min = date.getMinutes();
    let day = date.getDate();
    min = min < 10 ? "0" + min : min;
    let month = monthNames[date.getMonth()]; //getmonth returns the month in number format
    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  return (
    <>
      <div className="note-wrap">
        <div className="note-content" style={{ background: note.color }}>
          <textarea className="note-text" defaultValue={note.text} />
          <div className="notes-footer-content" style={{ display: "flex" }}>
            <p style={{ color: "white" }}>{formateDate(note.time)}</p>
            <span>
              <MdDeleteForever
                className="del-icon-note"
                style={{
                  color: "red",
                  fontSize: "2.1rem",
                  margin: "6px",
                  cursor: "pointer"
                }}
                onClick={() => deleteNote(note.id)}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Note;
