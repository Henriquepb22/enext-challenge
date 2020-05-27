import React, { useEffect, useState } from "react";

import { getBreedsList } from "../../services/api";

import BreedData from "../BreedData";

function BreedForm() {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState("");

    useEffect(() => {
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

        getBreeds();
    }, []);

    function handleInput(e) {
        breeds.forEach((breed) => {
            if (e.target.value === breed) {
                setSelectedBreed(breed);
            }
        });
    }

    return (
        <div>
            <form>
                <h1>Buscar cachorro por raça</h1>
                <label htmlFor="dogBreedInput">
                    Raça:
                    <input
                        id="dogBreedInput"
                        type="text"
                        placeholder="Digite o nome da raça"
                        onChange={handleInput}
                    />
                </label>
                <select
                    onChange={(e) => setSelectedBreed(e.target.value)}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Selecione ou digite uma raça
                    </option>
                    {breeds.map((breed, index) => (
                        <option key={index} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
                <button type="submit">Buscar</button>
            </form>
            <BreedData name={selectedBreed} />
        </div>
    );
}

export default BreedForm;
