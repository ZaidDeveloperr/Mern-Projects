import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // Make sure BrowserRouter is here
import ShopContextProvider from "./context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> {/* BrowserRouter should wrap the whole app */}
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
