import React, { useContext } from "react";
import { BookListContext } from "../contexts/BookListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import AddBookForm from "./AddBookForm";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const {
    bookList,
    setBookList,
    booksReadList,
    setBooksReadList,
    removeBook,
  } = useContext(BookListContext);
  const { theme, isLightTheme } = useContext(ThemeContext);
  const toggleCompletion = (toggleBook) => {
    const newList = bookList.map((book) =>
      book.title === toggleBook.title && book.author === toggleBook.author
        ? { ...book, completed: !toggleBook.completed }
        : book
    );
    setBookList(newList);

    removeBook(setBookList, bookList, toggleBook);

    const completedBook = newList.filter(
      (bookFilter) => bookFilter.completed === true
    );

    setBooksReadList([...booksReadList, ...completedBook]);

    console.log(newList);
  };

  const togglePending = (toggleBook) => {
    const newList = bookList.map((book) =>
      book.title === toggleBook.title && book.author === toggleBook.author
        ? { ...book, pending: !toggleBook.pending }
        : book
    );
    setBookList(newList);
  };

  const themeStyle = {
    color: theme.char,
  };

  return (
    <div className={"pendingBookList"}>
      <h2>Pending List</h2>
      <SimpleBar style={{ height: "150px" }}>
        {bookList.length === 0 ? (
          <p style={themeStyle}>No books to Read</p>
        ) : (
          bookList.map((book) => (
            <p style={themeStyle}>
              {book.title}, {book.author}
              <button
                onClick={() => toggleCompletion(book)}
                className={"bookStatus"}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={
                    book.completed
                      ? "green"
                      : isLightTheme
                      ? "#482b61"
                      : "#425af5"
                  }
                  size="lg"
                />
              </button>
              <button
                onClick={() => togglePending(book)}
                className={"bookStatus"}
              >
                <FontAwesomeIcon
                  icon={faHourglassHalf}
                  color={
                    book.pending
                      ? "orange"
                      : isLightTheme
                      ? "#482b61"
                      : "#425af5"
                  }
                  size="lg"
                />
              </button>
            </p>
          ))
        )}
      </SimpleBar>

      <AddBookForm />
    </div>
  );
};

export default BookList;
