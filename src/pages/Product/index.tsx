import { useParams } from "react-router-dom"

const Product = () => {
    const { id: productId } = useParams();
    console.log(productId);
    return <div>
        {productId}
    </div>
}

export default Product;