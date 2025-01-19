import React from "react";
import styles from "@/styles/menu.module.scss";
import clsx from "clsx";

const Menu = ({ navbarOpen, setNavbarOpen }) => {
  let isOpen = "";
  if (navbarOpen) {
    isOpen = styles.isOpen;
  } else {
    isOpen = "";
  }
  return (
    <nav className={clsx(styles.myNav, isOpen)}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
