import React from "react";
import {
  FaBug,
  FaHome,
  FaProjectDiagram,
  FaUserCog,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
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
          <Link to="/dashboard" className="link">
            <span>
              <FaHome />
            </span>
            Home
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/dashboard/bugs" className="link">
            <span>
              <FaBug />
            </span>
            Bugs
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/dashboard/users" className="link">
            <span>
              <FaUserPlus />
            </span>
            Users
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/dashboard/projects" className="link">
            <span>
              <FaProjectDiagram />
            </span>
            Project
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/dashboard/users" className="link">
            <span>
              <FaUsers />
            </span>
            Teams
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/dashboard/roles" className="link">
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
