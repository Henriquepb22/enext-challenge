import { createContext } from "react";

export const breedsTheme = JSON.parse(localStorage.getItem("breedsTheme")) || {
    fontColor: "black",
    fontFamily: "Roboto",
};

const ThemeContext = createContext(breedsTheme);

export default ThemeContext;
