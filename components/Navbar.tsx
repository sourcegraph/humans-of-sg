import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <li>Sourcegraph</li>
      <li>About Sourcegraph</li>
      <li>Sourcegraph.com</li>
    </nav>
  );
};

export default Navbar;
