import ProductCard from "../../Components/ProductCard";
import { getAllProducts } from "../../utils/products";

import "./styles.css"

const Gallery = () => {
    const products = getAllProducts();
    return <div className="gallery-container">
        {products.map(product => <ProductCard {...product}></ProductCard>)}
    </div>;
};

export default Gallery; 