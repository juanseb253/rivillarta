import { Link } from "react-router-dom";
import Card from "../Card"
import "./styles.css"

type Props = {
    id: string,
    image: string,
    name: string,
}

const CollectionCard: React.FC<Props> = ({ id, image, name }) => {
    return <div className="product-container">
        <Link to={`/collection/${id}`}>
            <Card>
                <div className="product-image-container">
                    <img src={image} alt={name} />
                </div>
                <h3>{name}</h3>
            </Card>
        </Link>
    </div>
}

export default CollectionCard;