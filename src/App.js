import React from "react";
import "./styles/global.css";

import Header from "./components/Header";
import DogsSection from "./components/DogsSection";

function App() {
    return (
        <div>
            <Header />
            <DogsSection />
        </div>
    );
}

export default App;
