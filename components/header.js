// components/header.js
"use client";
import styles from "../styles/siteHeader.module.scss";
import { useState, useEffect } from "react";
import clsx from "clsx";

const Header = ({ scrollStatus, navbarOpen, setNavbarOpen }) => {
  const handleNavClick = () => {
    setNavbarOpen(!navbarOpen);
  };
  let scrollDirection = scrollStatus.direction;
  let navOpen = "";
  let isSticky = "";
  console.log("nav is open " + navbarOpen);
  if (navbarOpen == true) {
    navOpen = styles.isOpen;
    isSticky = styles.sticky;
  } else {
    navOpen = "";
    if (scrollDirection == "down") {
      isSticky = styles.sticky;
    } else {
      isSticky = "";
    }
  }
  return (
    <header id="siteHeader" className={clsx(styles.header, isSticky)}>
      <div className={styles.logo}>
        <h1 className="text-2xl font-bold my-0">Logo</h1>
      </div>
      <button onClick={handleNavClick}>
        <div className={styles.icon}>
          <span className={navOpen}></span>
          {/* <span className={isNavOpen}></span>
          <span className={isNavOpen}></span> */}
        </div>
      </button>
    </header>
  );
};

export default Header;
