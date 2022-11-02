import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./components/game/Game";
import ContextProvider from "./components/utils/Context";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Game />
    </ContextProvider>
  </React.StrictMode>,
);
