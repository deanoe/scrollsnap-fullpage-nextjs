"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import styles from "@/styles/fullPage.module.scss";
import { clsx } from "clsx";

export default function FullPage({ scrollStatus, navbarOpen }) {
  let allowScrolling = true;
  if (navbarOpen) {
  } else {
  }
  console.log("navbar open " + navbarOpen);
  const handleOnLeave = (origin, destination, direction) => {
    const scrollData = {
      origin: origin.index,
      destination: destination.index,
      direction: direction
    };
    return scrollStatus(scrollData);
  };
  return (
    <ReactFullpage
      licenseKey="W5NU8-IV7M6-JAIGJ-4N867-IBRZM"
      fixedElements={".myNav"}
      scrollingSpeed={10}
      scrollStatus={scrollStatus}
      navigation={true}
      navigationPosition="right"
      credits={false}
      onLeave={handleOnLeave}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className={clsx("section")}>
            <h1>Section 1</h1>
            <p>Content for section 1</p>
          </div>
          <div className={clsx("section")}>
            <h1>Section 2</h1>
            <p>Content for section 2</p>
          </div>
          <div className={clsx("section")}>
            <h1>Section 3</h1>
            <p>Content for section 3</p>
          </div>
          <div className={clsx("section")}>
            <h1>Section 4</h1>
            <p>Content for section 4</p>
          </div>
          <div className={clsx("section")}>
            <h1>Section 5</h1>
            <p>Content for section 5</p>
          </div>
          <div className={clsx("section")}>
            <h1>Section 6</h1>
            <p>Content for section 6</p>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
