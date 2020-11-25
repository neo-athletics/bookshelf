import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [islightTheme, setIsLightTheme] = useState(true);
  const lightTheme = { char: "#555", bg: "#ddd", containerColor: "#eee" };
  const darkTheme = { char: "#ddd", bg: "#333", containerColor: "#555" };

  const toggleTheme = () => {
    setIsLightTheme(!islightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        islightTheme,
        lightTheme,
        darkTheme,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
