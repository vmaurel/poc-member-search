import React from "../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import ReactDOM from "../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom";
import { BrowserRouter } from "../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import logger from "./services/logService";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

logger.init();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
