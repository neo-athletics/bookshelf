import React, { useContext, useRef, useEffect } from "react";
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
import { AnimatePresence, motion } from "framer-motion";

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
    //sets completed property on book
    const newList = bookList.map((book) => {
      if (
        book.title === toggleBook.title &&
        book.author === toggleBook.author
      ) {
        return { ...book, completed: !toggleBook.completed };
      } else {
        return book;
      }
    });

    removeBook(setBookList, newList, toggleBook, true);

    //get filtered book
    const completedBook = newList.filter(
      (bookFilter) => bookFilter.completed === true
    );

    //added to completed booklist
    setBooksReadList([...booksReadList, ...completedBook]);
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

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.1, duration: 0.2 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };

  const hasRenderedRef = useRef(false);

  useEffect(() => {
    if (bookList) {
      hasRenderedRef.current = true;
    } else {
      hasRenderedRef.current = false;
    }
  }, [bookList]);

  return (
    <motion.div
      className={"pendingBookList"}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Pending List</h2>

      <SimpleBar style={{ height: "150px" }}>
        {bookList.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.05 } }}
            style={themeStyle}
          >
            No books to Read
          </motion.p>
        ) : (
          <AnimatePresence>
            {bookList.map((book, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: (i) => ({ opacity: 0, y: -50 * i }),
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1 },
                  }),
                  removed: {
                    opacity: 0,
                  },
                }}
                custom={i}
                initial={hasRenderedRef.current ? "visible" : "hidden"}
                animate="visible"
                exit="removed"
                style={themeStyle}
              >
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
              </motion.p>
            ))}
          </AnimatePresence>
        )}
      </SimpleBar>

      <AddBookForm />
    </motion.div>
  );
};

export default BookList;
