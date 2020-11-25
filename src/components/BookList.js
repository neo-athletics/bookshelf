import React, { useContext, useEffect, useState } from "react";
import { BookListContext } from "../contexts/BookListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";

const BookList = () => {
  const {
    bookList,
    setBookList,
    booksReadList,
    setBooksReadList,
    removeBook,
  } = useContext(BookListContext);

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

  console.log();

  return (
    <div>
      <h2>Pending List</h2>
      {bookList.length === 0 ? (
        <p>No books to Read</p>
      ) : (
        bookList.map((book) => (
          <div>
            <p>
              {book.title},{book.author}
              <button onClick={() => toggleCompletion(book)}>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={book.completed ? "green" : ""}
                />
              </button>
              <button onClick={() => togglePending(book)}>
                <FontAwesomeIcon
                  icon={faHourglassHalf}
                  color={book.pending ? "orange" : ""}
                />
              </button>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
