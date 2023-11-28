import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";
import App from "./App.jsx";
import "./index.css";
import AdminContextProvider from "./contexts/AdminContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AppContextProvider>
        <AdminContextProvider>
          <App />
        </AdminContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
