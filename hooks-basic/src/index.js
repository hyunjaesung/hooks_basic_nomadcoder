import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// 브라우저의 Notification API 사용
const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    // 윈도우에 있는 Notification API만 실행되야함
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      // 알림 허락 안되있으면
      // 허락 요청
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          // 허락했으면
          new Notification(title, options); // 이제는 알림
        } else {
          // 아니면
          return; // 걍종료
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can I love you?", {
    body: "Can you love me?"
  });

  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
