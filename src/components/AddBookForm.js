import React, { useState, useContext } from "react";
import { BookListContext } from "../contexts/BookListContext";

const AddBookForm = () => {
  const { bookList, setBookList } = useContext(BookListContext);
  const [book, setBook] = useState({
    title: "",
    author: "",
    pending: false,
    completed: false,
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookList([...bookList, book]);
    setBook({ ...book, title: "", author: "" });
    console.log(bookList);
  };

  return (
    <div className={"bookForm"}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={book.author}
          onChange={handleChange}
        />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default AddBookForm;
