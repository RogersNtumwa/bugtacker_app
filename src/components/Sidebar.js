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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">
        <li className="sidebar__menu-item">
          <Link to="/dashboard" className="link">
            <span className="link__icon">
              <FaHome />
            </span>
            <span className="link__title">Home</span>
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/dashboard/bugs" className="link">
            <span className="link__icon">
              <FaBug />
            </span>
            <span className="link__title">Bugs</span>
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/dashboard/users" className="link">
            <span className="link__icon">
              <FaUserPlus />
            </span>
            <span className="link__title">Users</span>
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/dashboard/projects" className="link">
            <span className="link__icon">
              <FaProjectDiagram />
            </span>
            <span className="link__title">Project</span>
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/dashboard/users" className="link">
            <span className="link__icon">
              <FaUsers />
            </span>
            <span className="link__title">Teams</span>
          </Link>
        </li>
        <li className="sidebar__menu-item">
          <Link to="/dashboard/roles" className="link">
            <span className="link__icon">
              <FaUserCog />
            </span>
            <span className="link__title">Role</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
