import React, { createContext, useState } from "react";

export const BookListContext = createContext();

const BookListContextProvider = (props) => {
  const [bookList, setBookList] = useState([]);
  const [booksReadList, setBooksReadList] = useState([]);

  const removeBook = (listToBeSet, unfilteredList, bookToRemove, bool) => {
    console.log(unfilteredList);
    const filteredList = unfilteredList.filter((book) => {
      if (book.completed !== bool) {
        return book;
      }
    });
    listToBeSet(filteredList);
  };

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
