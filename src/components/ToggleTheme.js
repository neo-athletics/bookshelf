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
        <label htmlFor={"check"} className={"checkToggle"}>
          <FontAwesomeIcon icon={faMoon} color={"yellow"} size="1x" />
          <FontAwesomeIcon icon={faSun} color={"#ffff23"} size="1x" />
          <div
            className={"ball"}
            style={{ background: theme.containerColor }}
          ></div>
        </label>
      </div>
    </>
  );
};

export default ToggleTheme;
