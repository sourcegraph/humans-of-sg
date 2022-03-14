import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={styles.nav}>
      <li className={styles.link}>Explore</li>
      <li className={styles.link}>Blog</li>
      <li className={styles.link}>About Sourcegraph</li>
    </ul>
  );
};

export default Navbar;
