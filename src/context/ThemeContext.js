import { createContext } from "react";

export const breedsTheme = JSON.parse(localStorage.getItem("breedsTheme")) || {
    fontColor: "#ecf0f1",
    fontFamily: "Roboto",
};

const ThemeContext = createContext(breedsTheme);

export default ThemeContext;
