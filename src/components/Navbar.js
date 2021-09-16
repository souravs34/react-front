import React from "react";
import sourav from "../img/avatar-sourav.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar--main">
      <nav className="nav">
        <div className="profile">
          <img src={sourav} alt="" />
        </div>
        <ul className="nav--items">
          <li className="nav--item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav--item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav--item">
            <NavLink to="/projects" exact activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li className="nav--item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav--item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>@2021 Lorem Ipsum</p>
        </footer>
      </nav>
    </div>
  );
};

export default Navbar;
