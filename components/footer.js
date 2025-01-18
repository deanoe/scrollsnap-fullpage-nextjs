// components/footer.js
"use client";
import styles from "../styles/siteFooter.module.scss";
import { useState, useEffect } from "react";
import clsx from "clsx";

const Footer = props => {
  // let scrollDirection = props.scrollStatus.direction;
  // let isSticky = "";
  // if (scrollDirection == "down") {
  //   isSticky = styles.sticky;
  // } else {
  //   isSticky = "";
  // }

  return (
    <footer id="siteFooter" className={styles.footer}>
      {/* Your footer content here */}
    </footer>
  );
};

export default Footer;
