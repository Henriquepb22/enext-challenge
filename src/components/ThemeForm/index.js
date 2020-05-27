import React, { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";

function ThemeForm() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <form>
                <h1>Estilos:</h1>
                <label htmlFor="textFont">
                    <select
                        id="textFont"
                        value={theme.fontFamily}
                        onChange={(e) =>
                            setTheme({ ...theme, fontFamily: e.target.value })
                        }
                    >
                        <option value="Roboto">Roboto</option>
                        <option value="Open Sans">Open Sans</option>
                        <option value="Noto Sans JP">Noto Sans JP</option>
                        <option value="Lato">Lato</option>
                        <option value="Montserrat">Montserrat</option>
                    </select>
                </label>
                <label htmlFor="textColor">
                    <select
                        id="textColor"
                        value={theme.fontColor}
                        onChange={(e) =>
                            setTheme({
                                ...theme,
                                fontColor: e.target.value,
                            })
                        }
                    >
                        <option value="#000">Black</option>
                        <option value="#16a085">Green Sea</option>
                        <option value="#e74c3c">Alizarin</option>
                        <option value="#7f8c8d">Asbestos</option>
                        <option value="#8e44ad">Wisteria</option>
                    </select>
                </label>
            </form>
        </div>
    );
}

export default ThemeForm;
