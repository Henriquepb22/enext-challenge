import React from "react";

function ThemeForm() {
    return (
        <div>
            <form>
                <h1>Estilos:</h1>
                <label htmlFor="textFont">
                    <select id="textFont">
                        <option>Fonte 1</option>
                        <option>Fonte 2</option>
                        <option>Fonte 3</option>
                        <option>Fonte 4</option>
                        <option>Fonte 5</option>
                    </select>
                </label>
                <label htmlFor="textColor">
                    <select id="textColor">
                        <option>Cor 1</option>
                        <option>Cor 2</option>
                        <option>Cor 3</option>
                        <option>Cor 4</option>
                        <option>Cor 5</option>
                    </select>
                </label>
            </form>
        </div>
    );
}

export default ThemeForm;
