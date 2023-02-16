import "@stylumia/core-ui/dist/index.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ToastContainer} from "@stylumia/core-ui"

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer/>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
