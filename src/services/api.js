export async function getBreedsList() {
    try {
        const resp = await fetch("https://dog.ceo/api/breeds/list/all");
        const breedsList = await resp.json();

        return breedsList.message;
    } catch (err) {
        console.error(err);
        return {};
    }
}
