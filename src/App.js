import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
import BookListContextProvider from "./contexts/BookListContext";
import BooksReadList from "./components/BooksReadList";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookListContextProvider>
          <h1>Book Shelf</h1>
          <BookList />
          <AddBookForm />
          <BooksReadList />
          <ToggleTheme />
        </BookListContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
