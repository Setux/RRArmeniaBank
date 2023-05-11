import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WebAppProvider from "./contexts/appContext";
import ApiProvider from "./contexts/apiContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WebAppProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </WebAppProvider>
  </React.StrictMode>
);
