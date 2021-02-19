import React from "react";
import { FaBug, FaProjectDiagram, FaUserCog, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import user from "../images/passmile.PNG";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <img src={user} alt="user" className="sidebar__user-img" />
        <p className="sidebar__user-name">Welcome Rogers Ntumwa</p>
      </div>
      <ul className="sidebar__menu">
        <li className="sidebar__menu-item">
          <Link to="/bugs" className="link">
            <span>
              <FaBug />
            </span>
            Bugs
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/users" className="link">
            <span>
              <FaUsers />
            </span>
            Users
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/users" className="link">
            <span>
              <FaProjectDiagram />
            </span>
            Project
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/users" className="link">
            <span>
              <FaUsers />
            </span>
            Users
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/users" className="link">
            <span>
              <FaUserCog />
            </span>
            Role
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
