import productOne from "../assets/product-1.jpg"
import productTwo from "../assets/product-2.jpg"
import productThree from "../assets/product-3.jpg"
import productFour from "../assets/product-4.png"
import productFive from "../assets/product-5.jpg"
import productSix from "../assets/product-6.jpg"
const products = [
    {
        id: 1,
        image: productOne,
        name: "Tote bag de tela rivillarta.",
        description: <div>
            <p>Ideal para llevar libros, ideas y mensajes incómodos. Arte urbano y crítica social.</p>
            <div>
                <span>Ancho: </span>
                <p>35 cm</p>
            </div>
            <div>
                <span>Alto: </span>
                <p>40 cm</p>
            </div>
            <div>
                <span>Asas (largo total): </span>
                <p>60 a 70 cm (para colgar al hombro cómodamente)</p>
            </div>
        </div>,
        price: 80000
    },
    {
        id: 2,
        image: productTwo,
        name: "Póster impreso rivillarta",
        description: <div>
            <p>Arte urbano, crítica visual y resistencia en gran formato. </p>
            <p>28 x 43 cm</p>
        </div>,
        price: 30000
    },
    {
        id: 3,
        image: productThree,
        name: "Póster impreso cristo",
        description: <div>
            <p>Arte urbano, crítica visual y resistencia en gran formato. </p>
            <p>28 x 43 cm</p>
        </div>,
        price: 30000
    },
    {
        id: 4,
        image: productFour,
        name: "Camiseta unisex",
        descripcion: "Camiseta unisex 100% algodón de rivillarta. \nEn todas las tallas ",
        price: 50000
    },
    {
        id: 5,
        image: productFive,
        name: "Hoodie unisex ",
        description: "Hoodie unisex 100% algodón de rivillarta. \nEn todas las tallas ",
        price: 100000
    },
    {
        id: 6,
        image: productSix,
        name: "Stiker logo rivillarta.",
        description: "7.5 x 6.5 cm",
        price: 1500
    }
]
export const getAllProducts = () => {
    return products;
}

export const getProductById = (id: number) => {
    return products.find(product => product.id === id)
}
export const priceFormater = (price: number) => {
    const entero = Math.floor(price); // redondea hacia abajo si hay decimales
    const conPuntos = entero
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `$${conPuntos}`;
}