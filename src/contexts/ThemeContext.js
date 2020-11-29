import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const lightTheme = {
    char: "#373737",
    bg: "#ddd",
    containerColor: "whitesmoke",
  };
  const darkTheme = { char: "#3e3e3e", bg: "#333", containerColor: "#555" };

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isLightTheme,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
