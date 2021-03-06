import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../store/stateProvider";

function Header() {
  const [{ cart }] = useStateValue();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/checkout">
            Shopping Cart (<span> {cart.length}</span> )
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
