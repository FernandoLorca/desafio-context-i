import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import JsonDataContextProvider from "./context/JsonDataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <JsonDataContextProvider>
        <App />
      </JsonDataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
