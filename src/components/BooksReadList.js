import React, { useContext } from "react";
import { BookListContext } from "../contexts/BookListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { ThemeContext } from "../contexts/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";

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
    const newList = booksReadList.map((book) => {
      if (
        book.title === toggleBook.title &&
        book.author === toggleBook.author
      ) {
        return { ...book, completed: !toggleBook.completed };
      } else {
        return book;
      }
    });

    removeBook(setBooksReadList, newList, toggleBook, false);

    const uncompletedBook = newList.filter(
      (bookFilter) => bookFilter.completed === false
    );

    setBookList([...bookList, ...uncompletedBook]);
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

  return (
    <motion.div
      className={"booksReadList"}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Completed List</h2>

      <SimpleBar style={{ height: "150px" }}>
        {booksReadList.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.05 } }}
            style={{ color: theme.char }}
          >
            You have some work to do
          </motion.p>
        ) : (
          <AnimatePresence>
            {booksReadList.map((book, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: (i) => ({ opacity: 0, x: -50 * i }),
                  visible: (i) => ({
                    opacity: 1,
                    x: 0,
                    transition: { delay: i * 0.1 },
                  }),
                  removed: {
                    opacity: 0,
                  },
                }}
                custom={i}
                initial="hidden"
                animate="visible"
                exit="removed"
                style={{ color: theme.char }}
              >
                {book.title}, {book.author}
                <button
                  onClick={() => revertCompletion(book)}
                  className={"bookStatus"}
                >
                  <FontAwesomeIcon
                    icon={faUndo}
                    color={isLightTheme ? "#15ad15" : "#19fb11"}
                    size="lg"
                  />
                </button>
              </motion.p>
            ))}
          </AnimatePresence>
        )}
      </SimpleBar>
    </motion.div>
  );
};

export default BooksReadList;
