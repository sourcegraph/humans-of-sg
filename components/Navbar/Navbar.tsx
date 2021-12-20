import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftLinks}>
        <p>Sourcegraph</p>
      </div>
      <div className={styles.rightLinks}>
        <p>About Sourcegraph</p>
        <p>Sourcegraph.com</p>
      </div>
    </div>
  );
};

export default Navbar;
