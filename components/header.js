// components/header.js
"use client";
import styles from "../styles/siteHeader.module.scss";
import { useState, useEffect } from "react";
import clsx from "clsx";

const Header = props => {
  let scrollDirection = props.scrollStatus.direction;
  let isSticky = "";
  if (scrollDirection == "down") {
    isSticky = styles.sticky;
  } else {
    isSticky = "";
  }

  return (
    <header id="siteHeader" className={clsx(styles.header, isSticky)}>
      {/* Your header content here */}
    </header>
  );
};

export default Header;
