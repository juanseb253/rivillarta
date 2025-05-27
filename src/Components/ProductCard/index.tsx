
import Card from "../Card"
import "./styles.css"
import { priceFormater } from "../../utils/products";

type Props = {
    image: string,
    name: string,
    price: number
}

const ProductCard: React.FC<Props> = ({ image, name, price }) => {
    return <div className="product-container">
        <Card>
            <div className="product-image-container">
                <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{priceFormater(price)}</p>
        </Card>

    </div>
}

export default ProductCard;