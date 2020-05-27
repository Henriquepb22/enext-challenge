import React, { useEffect, useState } from "react";

import { getBreedsList } from "../../services/api";

import BreedData from "../BreedData";

import "./styles.css";

function BreedForm() {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState("");
    const [inputedBreed, setInputedBreed] = useState("");

    useEffect(() => {
        getBreeds();
    }, []);

    useEffect(() => {
        if (inputedBreed === "") {
            setSelectedBreed("");
        }
    }, [inputedBreed]);

    async function getBreeds() {
        const breedList = await getBreedsList();

        for (let breed in breedList) {
            if (breedList[breed].length >= 1) {
                breedList[breed].forEach((subBreed) =>
                    setBreeds((oldBreeds) => [
                        ...oldBreeds,
                        `${breed} ${subBreed}`,
                    ])
                );
            } else {
                setBreeds((oldBreeds) => [...oldBreeds, breed]);
            }
        }
    }

    function handleInput(e) {
        setInputedBreed(e.target.value);
        breeds.forEach((breed) => {
            if (e.target.value === breed) {
                setSelectedBreed(breed);
            }
        });
    }

    function handleSelect(e) {
        setSelectedBreed(e.target.value);
        setInputedBreed(e.target.value);
    }

    return (
        <div className="breed-container">
            <form className="breed-form">
                <h1 className="form-title">Buscar cachorro por raça</h1>
                <label className="form-label" htmlFor="dogBreedInput">
                    Raça:
                    <input
                        id="dogBreedInput"
                        type="text"
                        placeholder="Digite o nome da raça"
                        onChange={handleInput}
                        value={inputedBreed}
                    />
                </label>
                <select onChange={handleSelect} value={selectedBreed}>
                    <option value="" disabled>
                        Selecione uma raça
                    </option>
                    {breeds.map((breed, index) => (
                        <option key={index} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
            </form>
            <BreedData breedName={selectedBreed} />
        </div>
    );
}

export default BreedForm;
