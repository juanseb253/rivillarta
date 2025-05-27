import colectionOne from "../assets/coleccion1-prot1.png"
import colectionTwo from "../assets/colec3-prot1.png"
import CollectionOne from "../pages/CollectionOne";
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
        page: <div></div>
    }
]

export const getAllColections = () => {
    return colections;
}

export const getCollectionById = (id: string = "") => {
    return colections.find(collection => collection.id === id)
}