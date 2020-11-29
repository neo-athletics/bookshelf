import React, { useContext } from "react";
import { BookListContext } from "../contexts/BookListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { ThemeContext } from "../contexts/ThemeContext";
const BooksReadList = () => {
  const {
    booksReadList,
    setBooksReadList,
    setBookList,
    bookList,
    removeBook,
  } = useContext(BookListContext);
  const { theme, isLightTheme } = useContext(ThemeContext);
  const revertCompletion = (toggleBook) => {
    const newList = booksReadList.map((book) =>
      book.title === toggleBook.title && book.author === toggleBook.author
        ? { ...book, completed: !toggleBook.completed }
        : book
    );

    setBooksReadList(newList);

    removeBook(setBooksReadList, booksReadList, toggleBook);

    const uncompletedBook = newList.filter(
      (bookFilter) => bookFilter.completed === false
    );

    setBookList([...bookList, ...uncompletedBook]);
  };

  return (
    <div className={"booksReadList"}>
      <h2>Completed List</h2>
      <SimpleBar style={{ height: "150px" }}>
        {booksReadList.length === 0 ? (
          <p style={{ color: theme.char }}>You have some work to do</p>
        ) : (
          booksReadList.map((book) => (
            <div>
              <p style={{ color: theme.char }}>
                {book.title}, {book.author}
                <button
                  onClick={() => revertCompletion(book)}
                  className={"bookStatus"}
                >
                  <FontAwesomeIcon
                    icon={faUndo}
                    color={isLightTheme ? "#088f03" : "#19fb11"}
                    size="lg"
                  />
                </button>
              </p>
            </div>
          ))
        )}
      </SimpleBar>
    </div>
  );
};

export default BooksReadList;
