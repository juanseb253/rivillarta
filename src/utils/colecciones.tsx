import colectionOne from "../assets/coleccion1-prot1.png"
import colectionTwo from "../assets/colec3-prot1.png"
import CollectionOne from "../pages/CollectionOne";
import CollectionTwo from "../pages/CollectionTwo";
const colections = [
    {
        id: "1",
        name: "Colección 1",
        image: colectionOne,
        page: <CollectionOne />
    },
    {
        id: "3",
        name: "Colección 2",
        image: colectionTwo,
        page: <CollectionTwo />
    }
]

export const getAllColections = () => {
    return colections;
}

export const getCollectionById = (id: string = "") => {
    return colections.find(collection => collection.id === id)
}