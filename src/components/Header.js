import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { logOut } from "../actions/auth";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logOut());
  };
  return (
    <div className="nav">
      <div className="nav navbar">
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
            <Link className="menu__list-item_link" onClick={logoutHandler}>
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
