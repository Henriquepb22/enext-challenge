import { createContext } from "react";

const ThemeContext = createContext({
    fontColor: "black",
    fontFamily: "Roboto",
});

export default ThemeContext;
