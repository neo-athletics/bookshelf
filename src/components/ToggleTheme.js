import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  const { islightTheme, lightTheme, darkTheme, toggleTheme } = useContext(
    ThemeContext
  );
  const theme = islightTheme ? lightTheme : darkTheme;

  return (
    <div>
      <button
        style={{ color: theme.char, background: theme.containerColor }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ToggleTheme;
