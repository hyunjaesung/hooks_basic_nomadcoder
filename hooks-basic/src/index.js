import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { callbackify } from "util";

const useFullscreen = onFullS => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      //  브라우저에 요청 함수
      if (onFullS && typeof onFullS === "function") {
        onFullS(true); // true 반환
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    // 이상하지만 원래 이리쓴다
    if (onFullS && typeof onFullS === "function") {
      onFullS(false); // false 반환
    }
  };

  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = isFullS => {
    console.log(isFullS ? "We are Full" : "We are not full");
  };

  const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  return (
    <div className="App" style={{ height: "4000px" }}>
      <div ref={element}>
        <img src="https://yt3.ggpht.com/a/AGF-l7-MAndAKQeGPRYBSvmImKM4r4075vRKnEwwIg=s88-mo-c-c0xffffffff-rj-k-no" />
        <button onClick={triggerFull}>Make full screen</button>
        <button onClick={exitFull}>Exit full screen</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
