import React, { useEffect, useState } from "react";

import "./styles.css";

function BreedData({ name }) {
    const [breedImage, setBreedImage] = useState("");

    useEffect(() => {
        async function getBreedNameAndImage(breed) {
            const formatedBreed = breed.split(" ");
            try {
                const resp = await fetch(
                    `https://dog.ceo/api/breed/${formatedBreed[0]}/images`
                );

                const breedImages = await resp.json();

                setBreedImage(breedImages.message[0]);
            } catch (err) {
                console.error(err);
            }
        }

        if (name !== "") {
            getBreedNameAndImage(name);
        }
    }, [name]);

    return (
        <div>
            <h1>{name}</h1>
            <div className="image-container">
                <img src={breedImage} alt={name} />
            </div>
        </div>
    );
}

export default BreedData;
