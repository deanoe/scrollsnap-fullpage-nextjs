"use client";
import React, { useState } from "react";
import Header from "@/components/header.js";
import Menu from "@/components/menu.js";
import FullPage from "@/components/fullpage.js";
import Footer from "@/components/footer";

export default function Home() {
  const [scrollStatus, setScrollStatus] = useState("");
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleScrollStatus = scrollData => {
    setScrollStatus(scrollData);
    console.log(scrollStatus);
  };
  return (
    <>
      <Header
        scrollStatus={scrollStatus}
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      />
      <Menu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <FullPage scrollStatus={handleScrollStatus} navbarOpen={navbarOpen} />
      <Footer />
    </>
  );
}
