import React from "react";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./GlobalComponents/ThemeProvider";
import { render } from "react-dom";
import { CartProvider } from "react-use-cart";

render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
