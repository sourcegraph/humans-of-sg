import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      {/* <Link href="/explore">Explore</Link> */}
      {/* <Link href="/blog">Blog</Link>
      <Link href="/about">About Sourcegraph</Link> */}
    </div>
  );
};

export default Navbar;
