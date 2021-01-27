import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <div className='container'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
