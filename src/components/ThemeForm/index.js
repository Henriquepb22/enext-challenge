import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ThemeContext from "../../context/ThemeContext";

import "./styles.css";

toast.configure({
    autoClose: 1500,
    position: "top-right",
    hideProgressBar: false,
});

function ThemeForm() {
    const { theme, setTheme } = useContext(ThemeContext);

    function saveTheme(e) {
        e.preventDefault();

        const localDate = new Date();
        const themeWithDate = { ...theme, savedAt: localDate.toLocaleString() };

        localStorage.setItem("breedsTheme", JSON.stringify(themeWithDate));
        toast.success("Salvo com sucesso!");
    }

    return (
        <div className="theme-wrapper">
            <form className="theme-form">
                <fieldset className="form-field">
                    <label className="form-label" htmlFor="textFont">
                        Fonte:
                    </label>
                    <select
                        className="theme-select"
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
                    <label className="form-label" htmlFor="textColor">
                        Cor:
                    </label>
                    <select
                        className="theme-select"
                        id="textColor"
                        value={theme.fontColor}
                        onChange={(e) =>
                            setTheme({
                                ...theme,
                                fontColor: e.target.value,
                            })
                        }
                    >
                        <option value="#ecf0f1">Clouds</option>
                        <option value="#16a085">Green Sea</option>
                        <option value="#e74c3c">Alizarin</option>
                        <option value="#7f8c8d">Asbestos</option>
                        <option value="#8e44ad">Wisteria</option>
                    </select>
                </fieldset>
                <button className="save-btn" onClick={(e) => saveTheme(e)}>
                    Salvar
                </button>
            </form>
        </div>
    );
}

export default ThemeForm;
