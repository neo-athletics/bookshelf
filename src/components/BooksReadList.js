import React, { useContext } from "react";
import { BookListContext } from "../contexts/BookListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

const BooksReadList = () => {
  const {
    booksReadList,
    setBooksReadList,
    setBookList,
    bookList,
    removeBook,
  } = useContext(BookListContext);
  console.log(booksReadList);

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
    <div>
      <h2>Completed List</h2>
      {booksReadList.length === 0 ? (
        <p>You have some work to do</p>
      ) : (
        booksReadList.map((book) => (
          <div>
            <p>
              {book.title},{book.author}
              <button onClick={() => revertCompletion(book)}>
                <FontAwesomeIcon
                  icon={faUndo}
                  color={book.completed ? "blue" : ""}
                />
              </button>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default BooksReadList;
