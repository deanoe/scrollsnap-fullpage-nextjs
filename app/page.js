"use client";
import React, { useState } from "react";
import Header from "../components/header.js";
import FullPage from "@/components/fullpage.js";
import Footer from "@/components/footer";

export default function Home() {
  const [scrollStatus, setScrollStatus] = useState("");
  const handleScrollStatus = scrollData => {
    setScrollStatus(scrollData);
  };
  return (
    <>
      <Header scrollStatus={scrollStatus} />
      <FullPage scrollStatus={handleScrollStatus} />
      <Footer />
    </>
  );
}
