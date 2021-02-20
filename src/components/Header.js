import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="nav">
      <div className="nav navbar">
        <span className="navbar__icon">
          <FaBars />
        </span>
        <Link to="/dashboard" className="navbar__brand">
          DashBoard
        </Link>
      </div>
      <div className="nav menu">
        <ul className="menu__list">
          <li className="menu__list-item">
            <Link to="/dashboard" className="menu__list-item_link">
              <span>
                <FaHome />
              </span>
              Home
            </Link>
          </li>
          <li className="menu__list-item">
            <Link to="/dashboard/profile" className="menu__list-item_link">
              <span>
                <FaUser />
              </span>
              Profile
            </Link>
          </li>
          <li className="menu__list-item">
            <Link to="/dashborad" className="menu__list-item_link">
              <span>
                <FaSignOutAlt />
              </span>
              SignOut
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
