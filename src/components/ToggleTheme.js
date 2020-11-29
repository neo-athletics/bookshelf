import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const ToggleTheme = () => {
  const { theme, toggleTheme, isLightTheme } = useContext(ThemeContext);

  return (
    <>
      {" "}
      <div>
        <input
          type={"checkbox"}
          id="check"
          checked={isLightTheme}
          onChange={toggleTheme}
        />
        <label for={"check"} className={"checkToggle"}>
          <FontAwesomeIcon icon={faMoon} color={"yellow"} size="s" />
          <FontAwesomeIcon icon={faSun} color={"#ffff23"} size="s" />
          <div
            className={"ball"}
            style={{ background: theme.containerColor }}
          ></div>
        </label>
      </div>
      {/* <button
        style={{ color: theme.char, background: theme.containerColor }}
        onClick={toggleTheme}
        className={"toggleTheme"}
      >
        Toggle Theme
      </button> */}
    </>
  );
};

export default ToggleTheme;
