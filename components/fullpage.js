"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import bkgs from "../styles/bkgs.module.scss";
import { clsx } from "clsx";

export default function FullPage() {
  return (
    <ReactFullpage
      licenseKey=""
      scrollingSpeed={10}
      navigation={true}
      navigationPosition="right"
      credits={false}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className={clsx("section", bkgs.bkg1)}>
            <h1>Section 1</h1>
            <p>Content for section 1</p>
          </div>
          <div className={clsx("section", bkgs.bkg2)}>
            <h1>Section 2</h1>
            <p>Content for section 2</p>
          </div>
          <div className={clsx("section", bkgs.bkg3)}>
            <h1>Section 3</h1>
            <p>Content for section 3</p>
          </div>
          <div className={clsx("section", bkgs.bkg4)}>
            <h1>Section 4</h1>
            <p>Content for section 4</p>
          </div>
          <div className={clsx("section", bkgs.bkg5)}>
            <h1>Section 5</h1>
            <p>Content for section 5</p>
          </div>
          <div className={clsx("section", bkgs.bkg6)}>
            <h1>Section 6</h1>
            <p>Content for section 6</p>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
