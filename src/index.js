import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BookListContextProvider from "./contexts/BookListContext";
import ThemeContextProvider from "./contexts/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BookListContextProvider>
        <App />
      </BookListContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
