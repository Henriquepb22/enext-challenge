import React, { useState } from "react";

import BreedForm from "../BreedForm";
import ThemeForm from "../ThemeForm";

import ThemeContext, { breedsTheme } from "../../context/ThemeContext";

import "./styles.css";

function DogsSection() {
    const [theme, setTheme] = useState(breedsTheme);

    return (
        <section className="dogs-section-container">
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <BreedForm />
                <ThemeForm />
            </ThemeContext.Provider>
        </section>
    );
}

export default DogsSection;
