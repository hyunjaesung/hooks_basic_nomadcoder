import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import defaultAxios from "axios";

const useAxios = (options, axios = defaultAxios) => {
  // axios에는 커스텀 들어감 안원하면 그냥 디폴트로
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  useEffect(() => {
    axios(options).then(data => {
      setState({
        ...state,
        loading: false,
        data
      }).catch(error => {
        setState({ ...state, loading: false, error });
      });
    });
  }, []);

  if (!options.url) {
    return;
  }

  return state;
};

const App = () => {
  const { loading, data } = useAxios({ url: "" });

  return (
    <div className="App">
      <button>Hello</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
