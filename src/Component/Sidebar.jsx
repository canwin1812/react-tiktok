import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import logoo from "../assets/images/buffett.jpg";
import warren from "../assets/images/warren.png";
import MenuItem from "./MenuItem";
import Account from "./Account";

export default function Sidebar(props) {
  const handleClick = () => {};
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <MenuItem
              text={val.title}
              icon={val.icon}
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            ></MenuItem>
          );
        })}
      </ul>
      <button className="profile">
        <img src={logoo} />
        <h4>Profile</h4>
      </button>
      <h6 className="follow">Following account</h6>
      <div className="sidebar-content">
        <ul className="account-list">
          <img className="images" src={warren} />
          <Account
            username="hexlix6266"
            displayName="Linh"
            onClick={handleClick}
          ></Account>
          <img className="images" src={warren} />
          <Account
            username="hexlix6266"
            displayName="Linh"
            onClick={handleClick}
          ></Account>
          <img className="images" src={warren} />
          <Account
            username="hexlix6266"
            displayName="Linh"
            onClick={handleClick}
          ></Account>
          <img className="images" src={warren} />
          <Account
            username="hexlix6266"
            displayName="Linh"
            onClick={handleClick}
          ></Account>
          <img className="images" src={warren} />
          <Account
            username="hexlix6266"
            displayName="Linh"
            onClick={handleClick}
          ></Account>
          <img className="images" src={warren} />
          <Account
            username="hexlix6266"
            displayName="Linh"
            onClick={handleClick}
          ></Account>
          <img className="images" src={warren} />
          <Account
            username="hexlix6266"
            displayName="Linh"
            onClick={handleClick}
          ></Account>
        </ul>
        <h5 className="more">See more</h5>
        <div className="list-content">
          <ul className="list">
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Program</a>
            </li>
            <li>
              <a href="">Team & policies </a>
            </li>
            <li>
              <a href="">2024 Tiktok</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
