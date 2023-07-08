import React from "react";
import Logo from "../assest/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
        <span>RouteMate</span>
      </Link>

      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/products" className="link">
          Products
        </NavLink>
        <NavLink to="/contact" className="link">
          Conatct
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
