import imgOne from "../../assets/coleccion1-prot1.png"
import imageTwo from "../../assets/mallplaza.png"
import imageThree from "../../assets/product-3.jpg"
import imageFour from "../../assets/cristo-rey.png"
import imageFive from "../../assets/etapas-proyecto.png"

import "./styles.css"

const CollectionOne = () => {
    return <div className="container">
        <section>
            <h2 className="proto">Prototipo 1</h2>
            <div className="first-text-prot-one">
                <div className="img-cont">
                    <img src={imgOne} alt="" />
                </div>
                <div className="text">
                    Por ultimo el eje principal de todo el proyecto, ¿CUANTO CUESTA UN
                    PAISAJE?, haciendo una critica directa a la barbaridad de edificio que es Mall
                    Plaza y el daño ambiental y espacial que le hizo a esta zona de Cali, poniendo un
                    mastodonte de edificio de concreto en una zona donde no se relaciona con el
                    contexto y simplemente crea mas brechas sociales económicas.
                </div>
            </div>

            <div className="parraf-container">


                Mallplaza Cali abrió sus puertas. La <span className="negrita">cadena chilena</span> de centros urbanos llegó a la capital del Valle del Cauca con más de <span className="negrita">60.000 metros cuadrados de área arrendable (GLA)</span>, con una robusta propuesta de gastronomía, moda y entretenimiento, consolidando una <span className="negrita">inversión de $634.000 millones.</span>

                A la fecha, cuenta con el 91 % del GLA comercializado, lo que es un hito como apertura para un centro comercial, no solo en Colombia sino también en Latinoamérica. “La inversión realizada en Cali y en el Valle del Cauca es resultado del compromiso de nuestra compañía con Colombia y este proyecto es uno de los más importantes en la ciudad y un claro ejemplo de crecimiento tipo <span className="negrita">‘greenfield’</span> que desarrollamos en Mallplaza. Esperamos que se convierta en <span className="negrita">el centro comercial preferido de los caleños</span> y vallecaucanos”, dijo Mauricio Mendoza, gerente de la división Colombia y Perú de Mallplaza.

                Con una robusta propuesta de retail, entretención y gastronomía, Mallplaza Cali cuenta con <span className="negrita">marcas nacionales e internacionales muy valoradas por las personas</span>, como Homecenter, H&M, Starbucks, Decathlon, IKEA -la primera de la ciudad de Cali y Valle del Cauca-, Zara, Bershka, Pull&Bear, Vélez, Gef, Adidas y Nike, entre otras.
            </div>

            <div className="img-cont-two">
                <img src={imageTwo} alt="" />

            </div>
            <div className="parraf-container">
                Santiago de Cali, 21 de marzo de 2024
            </div>
            <div className="parraf-container">
                Con una robusta propuesta de retail, entretención y gastronomía, Mallplaza Cali cuenta con <span className="negrita">marcas nacionales e internacionales muy valoradas por las personas</span>, como Homecenter, H&M, Starbucks, Decathlon, IKEA -la primera de la ciudad de Cali y Valle del Cauca-, Zara, Bershka, Pull&Bear, Vélez, Gef, Adidas y Nike, entre otras.
            </div>
            <div className="parraf-container">
                Fuente: <a href="https://www.cali.gov.co/desarrolloeconomico/publicaciones/180914/mallplaza-cali-abrio-sus-puertas-a-los-calenos/"> https://www.cali.gov.co/desarrolloeconomico/publicaciones/180914/mallplaza-cali-abrio-sus-puertas-a-los-calenos/</a>
            </div>

        </section>
        <section>
            <h2 className="proto">Prototipo 2</h2>
            <div className="first-text-prot-one">
                <div className="img-cont">
                    <img src={imageThree} alt="" />
                </div>
                <div className="text">
                    Para Rivillarta el proyecto que se realizo en el Cristo Rey, lo
                    único que hizo fue complejizar el encuentro social que se vivía
                    en esta zona, creando caminos con estructuras enormes que
                    costaron mucho dinero y que pudo invertirse en mejores
                    proyectos. El concepto de caminar la montaña y mirar Cali desde
                    distintos miradores es valido pero a su criterio no es una
                    actividad que los caleños vayan a frecuentar mas de una vez,
                    pues caminar por unos caminos no es algo que permita o
                    promueva la estancia en el lugar y la memoria de ir al Cristo Rey a
                    tomar agua panela con queso se diluye con los caminos.
                </div>
            </div>
            <div className="first-text-prot-one prot-normal">
                <div className="mult-img">
                    <div>
                        <img src={imageFour} alt="" />
                    </div>
                    <div>
                        <img src={imageFive} alt="" />
                    </div>
                </div>
                <div className="left">
                    <div className="parraf-container">
                        CORREDOR INTEGRAL CRISTO REY
                    </div>
                    <div className="parraf-container">
                        Valle del Cauca, Cali, Colombia;
                    </div>
                    <div className="parraf-container">
                        2021-2022
                    </div>
                    <div className="parraf-container">
                        289.228 m2 (recorrido de 6km)
                    </div>
                    <div className="parraf-container">
                        AUTORES:
                    </div>
                    <div className="parraf-container">
                        TALLER MI HABITAT, Secretaria de Vivienda Social y Hábitat.

                    </div>
                    <div className="parraf-container">
                        DIRECTORES:
                    </div>
                    <div className="parraf-container">
                        EDWARD CONDE SERNA.
                    </div>
                    <div className="parraf-container">
                        Arquitecto especialista en proyecto urbano / magister en
                        arquitectura.
                    </div>
                    <div className="parraf-container">
                        JORGE ALEXIS VIVEROS.
                    </div>
                    <div className="parraf-container">
                        Especialista en proyecto Urbano.
                    </div>
                    <div className="parraf-container">
                        Fuente: <a href="https://www.blappaisaje.com/corredorintegralcristorey">https://www.blappaisaje.com/corredorintegralcristorey</a>
                    </div>
                </div>
            </div>
            <div className="parraf-container">
                ¿por qué hacen que todo sea tan complicado?
            </div>
        </section>
    </div>
}

export default CollectionOne;