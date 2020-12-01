import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BookListContextProvider from "./contexts/BookListContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BookListContextProvider>
        <Router>
          <App />
        </Router>
      </BookListContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
