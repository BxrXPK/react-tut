import ReactDOM from "react-dom"; //! ReactDOM wird importiert um die verbindung von unserer APP und unserem documenten herzustellen.
import React from "react";

import App from "./App"; //! importiert unsere eigentliches Projekt/App
import "./main.scss";

ReactDOM.render(
  <App />, //! deklaration unserer importierten APP in einem SELFCLOSING TAG.
  document.getElementById("root")
);
