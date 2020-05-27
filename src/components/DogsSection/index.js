import React from "react";

import BreedForm from "../BreedForm";
import ThemeForm from "../ThemeForm";

import "./styles.css";

function DogsSection() {
    return (
        <section className="dogs-section-container">
            <BreedForm />
            <ThemeForm />
        </section>
    );
}

export default DogsSection;
