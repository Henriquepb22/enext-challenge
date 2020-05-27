import React, { useState } from "react";
import "./styles/global.css";

import Header from "./components/Header";
import DogsSection from "./components/DogsSection";

import ThemeContext, { breedsTheme } from "./context/ThemeContext";

function App() {
    const [theme, setTheme] = useState(breedsTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div
                style={{
                    color: theme.fontColor,
                    fontFamily: theme.fontFamily,
                }}
            >
                <Header />
                <DogsSection />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
