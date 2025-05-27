import CollectionCard from "../../Components/CollectionCard";
import { getAllColections } from "../../utils/colecciones";
import "./styles.css"
const Home = () => {
    const colections = getAllColections()
    return <div className="gallery-container">
        {colections.map(colection => <CollectionCard {...colection}></CollectionCard>)}
    </div>;
};

export default Home;