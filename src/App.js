import React, { useContext } from "react";
import BookList from "./components/BookList";
import ToggleTheme from "./components/ToggleTheme";
import { ThemeContext } from "./contexts/ThemeContext";
import BooksReadList from "./components/BooksReadList";
import { BookListContext } from "./contexts/BookListContext";
import "./style/bookshelf.css";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const { theme, isLightTheme } = useContext(ThemeContext);
  const { bookList, booksReadList } = useContext(BookListContext);

  console.log(location);
  return (
    <div
      className="App"
      style={!isLightTheme ? { background: "#000", opacity: "0.7" } : {}}
    >
      <div>
        <h1 style={{ color: theme.char }}>Book Shelf</h1>

        <div className={"bookshelfContainer"}>
          <div className={"glassContainer"}>
            <div
              className={"glassMorphism"}
              style={{ boxShadow: `inset 0 0 2000px ${theme.bg}` }}
            ></div>
          </div>

          <div className={"content"}>
            <ul className={"nav"}>
              <li>
                <NavLink exact to="/" activeClassName={"active"}>
                  Pending
                </NavLink>
                <span className={"bookLength"}>{bookList.length}</span>
              </li>
              <li>
                <NavLink to="/completed" activeClassName={"active"}>
                  Completed
                </NavLink>
                <span className={"bookLength"}>{booksReadList.length}</span>
              </li>
            </ul>
            <AnimatePresence exitBeforeEnter>
              <Switch key={location.key} location={location}>
                <Route path="/" exact>
                  <BookList />
                </Route>
                <Route path="/completed">
                  <BooksReadList />
                </Route>
                <Route path="*">
                  <div>
                    <h2>page not found</h2>
                  </div>
                </Route>
              </Switch>
            </AnimatePresence>
            <ToggleTheme />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
