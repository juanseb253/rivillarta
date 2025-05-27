import { useParams } from "react-router-dom"
import { getCollectionById } from "../../utils/colecciones";

const Collection = () => {
    const { id } = useParams();

    const inf = getCollectionById(id)

    return <div>
        {inf?.page}
    </div>
}

export default Collection