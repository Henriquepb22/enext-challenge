import React, { useEffect, useState, useContext } from "react";

import ThemeContext from "../../context/ThemeContext";

import "./styles.css";

function BreedData({ breedName }) {
    const [breedImage, setBreedImage] = useState("");
    const [loading, setLoading] = useState(false);

    const { theme } = useContext(ThemeContext);

    function getBreedRandomImage(breedName, breedImages) {
        const selectedBreedImages = breedImages.message.filter((breeds) => {
            const regex = new RegExp(breedName);
            return breeds.match(regex);
        });

        const randomImage = Math.floor(
            Math.random() * selectedBreedImages.length
        );

        return selectedBreedImages[randomImage];
    }

    useEffect(() => {
        setLoading(true);
        async function getBreedImage(breedName) {
            const breedWithoutSubBreed = breedName.split(" ");
            try {
                const resp = await fetch(
                    `https://dog.ceo/api/breed/${breedWithoutSubBreed[0]}/images`
                );

                const breedImages = await resp.json();
                if (breedWithoutSubBreed.length > 1) {
                    const fullBreedName =
                        breedWithoutSubBreed[0] + "-" + breedWithoutSubBreed[1];
                    const randomImage = getBreedRandomImage(
                        fullBreedName,
                        breedImages
                    );
                    setBreedImage(randomImage);
                } else {
                    const randomImage = getBreedRandomImage(
                        breedName,
                        breedImages
                    );
                    setBreedImage(randomImage);
                }
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
            setLoading(false);
        }

        if (breedName !== "") {
            getBreedImage(breedName);
        }
    }, [breedName]);

    if (breedName !== "") {
        return (
            <div className="image-container">
                {loading ? (
                    <h3>Carregando...</h3>
                ) : (
                    <>
                        <h2
                            className="breed-title"
                            style={{
                                fontFamily: theme.fontFamily,
                                color: theme.fontColor,
                            }}
                        >
                            {breedName}
                        </h2>
                        <img src={breedImage} alt={breedName} />
                    </>
                )}
            </div>
        );
    }

    return (
        <div>
            <h1>Digite ou selecione uma raça para buscar</h1>
        </div>
    );
}

export default BreedData;
