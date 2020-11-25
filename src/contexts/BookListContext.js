import React, { createContext, useState } from "react";

export const BookListContext = createContext();

const BookListContextProvider = (props) => {
  const [bookList, setBookList] = useState([]);
  const [booksReadList, setBooksReadList] = useState([]);

  const removeBook = (listToBeSet, filteredList, bookToRemove) => {
    listToBeSet(
      filteredList.filter((book) => {
        return (
          book.title !== bookToRemove.title &&
          book.author !== bookToRemove.author
        );
      })
    );
  };

  //removes and sets list
  // const setList = (listToBeSet, bookList, theBook, setList, list) => {
  //   removeBook(listToBeSet, bookList, theBook);
  //   setList([...list, theBook]);
  // };

  return (
    <BookListContext.Provider
      value={{
        bookList,
        setBookList,
        booksReadList,
        setBooksReadList,
        removeBook,
      }}
    >
      {props.children}
    </BookListContext.Provider>
  );
};

export default BookListContextProvider;
