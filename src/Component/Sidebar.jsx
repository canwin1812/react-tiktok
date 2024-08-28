import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarDate";
import logoo from "../assets/images/buffett.jpg";

export default function Sidebar(props) {
  const handleClick = () => {};
  const Account = () => {};
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <button className="profile">
        <img src={logoo} />
        <h4>Profile</h4>
      </button>
      <h6>following account</h6>
      <Account
        username="hexlix6266"
        displayName="Linh"
        onClick={handleClick}
        imageUrl="images/buffett.png"
      />
    </div>
  );
}
