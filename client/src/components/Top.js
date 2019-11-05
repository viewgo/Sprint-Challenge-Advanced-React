import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { TopContainer } from "../styles/styles.js";

function Top(props) {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggle = e => {
    console.log("toggle dark mode clicked");
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <TopContainer>
      <h1>Women's World Cup Search Trends</h1>
      <button onClick={toggle}>Toggle Dark Mode</button>
    </TopContainer>
  );
}

export default Top;
