import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.linkList}>
        {/* <li>
          <Link href="/explore">Explore</Link>
        </li> */}
        {/* <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About Sourcegraph</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
