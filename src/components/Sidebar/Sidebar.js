import React, { useState } from "react";
import "./Sidebar.css";
import { FaPlus } from "react-icons/fa";
const SideBar = ({ AddNote }) => {
  const [activeIcon, setActiveIcon] = useState(false);
  const color = [
    "cyan",
    "orange",
    "blue",
    "green",
    "gold",
    "magenta",
    "grey",
    "pink",
    "brown"
  ];
  const HandleOnClick = () => {
    if (activeIcon) setActiveIcon(false);
    else setActiveIcon(true);
  };
  return (
    <>
      <div className="sideBar-wrap">
        <div className="add-icon" onClick={HandleOnClick}>
          <FaPlus className="plus-icon" />
        </div>
        <ul
          className={`sidebar-list ${activeIcon ? "sidebar-list-active" : ""}`}
        >
          {color.map((item, index) => {
            return (
              <li
                className="sidebar-list-item"
                style={{ background: item }}
                key={{ index }}
                onClick={() => AddNote(item)}
              ></li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default SideBar;
