import { useContext } from "react";
import BookList from "./components/BookList";
import ToggleTheme from "./components/ToggleTheme";
import { ThemeContext } from "./contexts/ThemeContext";
import BooksReadList from "./components/BooksReadList";
import { BookListContext } from "./contexts/BookListContext";
import "./style/bookshelf.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  const { theme, isLightTheme } = useContext(ThemeContext);
  const { bookList, booksReadList } = useContext(BookListContext);

  return (
    <div
      className="App"
      style={!isLightTheme ? { background: "#000", opacity: "0.7" } : {}}
    >
      <div className={"bookshelfContainer"}>
        <h1 style={{ color: theme.char }}>Book Shelf</h1>
        <div className={"glassContainer"}>
          <div
            className={"glassMorphism"}
            style={{ boxShadow: `inset 0 0 2000px ${theme.bg}` }}
          ></div>
          <div className={"glassMorphism"}></div>
          <div className={"content"}>
            <Router>
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
              <Switch>
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
              <ToggleTheme />
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
