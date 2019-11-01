import React from 'react';
import {useDarkMode} from "../hooks/useDarkMode";

function Top(props){
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggle = e => {
      console.log("toggle dark mode clicked");
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    

    return(
        <>
        Top
        <button onClick={toggle}>Toggle Dark Mode</button>
        </>
    )
}

export default Top;