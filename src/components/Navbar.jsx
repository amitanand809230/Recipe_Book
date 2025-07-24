import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "1rem", background: "#f44336", color: "white", width: "100%" }}>
    <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}>
      🍽️ Recipe Book
    </Link>
  </nav>
);

export default Navbar;
