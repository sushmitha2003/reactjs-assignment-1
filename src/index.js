import React from "react";
import ReactDOM from "react-dom";
import logo from "./Lizard.jpg";
import Script from "./Script";
import "./Style.css";

ReactDOM.render(
  <div>
    <center>
      <img className="img" src={logo} />
      <Script />
    </center>
  </div>,
  document.getElementById("root")
);