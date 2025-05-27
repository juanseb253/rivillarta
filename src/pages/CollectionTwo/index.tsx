import imgOne from "../../assets/colec3-prot1.png"
import imgTwo from "../../assets/coleccion3-prot-2.png"

const CollectionTwo = () => {
    return <div className="container">
        <section>
            <h2 className="proto">Prototipo 1</h2>
            <div className="first-text-prot-one">
                <div className="img-cont">
                    <img src={imgOne} alt="" />
                </div>
                <div className="text">
                    Rivillarta cuestiona si las graderías diseñadas por el arquitecto Jaime Beltrán —ganador
                    de la Bienal Colombiana de Arquitectura en 2002— representan realmente el tipo de
                    obra que debería destacar en una universidad que forma arquitectos. Si bien la
                    intervención tiene valores arquitectónicos y logra resolver con calidad un programa
                    reducido, resulta llamativo que el edificio más premiado del campus sea un conjunto de
                    graderías, baños y un depósito. En un espacio con tanto potencial para el desarrollo de
                    arquitectura universitaria más compleja, crítica y simbólica, esta selección deja mucho
                    por pensar. ¿Es este el edificio que mejor representa lo que la Universidad entiende
                    por arquitectura?
                </div>
            </div>
        </section>
        <section>
            <h2 className="proto">Prototipo 2</h2>
            <div className="first-text-prot-one">
                <div className="img-cont">
                    <img src={imgTwo} alt="" />
                </div>
                <div className="text">
                    Rivillarta tiene que hacerse grande —casi desproporcionada— para poder llegar
                    hasta estas graderías. Más que una pieza destacada de arquitectura, este conjunto
                    de baños, depósito y graderías cumple una función estrictamente utilitaria, ubicada
                    en un extremo tan alejado del campus que obliga al habitante a preguntarse si
                    realmente vale la pena ir. Su uso se limita casi exclusivamente a eventos deportivos,
                    ya que acceder a este sector es incómodo y poco intuitivo. No hay un sistema urbano
                    que conecte de manera clara estos espacios con el resto de la universidad: hay que
                    cruzar calles, pisar pasto, sortear desniveles del terreno y caminar sobre gravilla hasta
                    finalmente llegar. Aunque los baños tienen buenas condiciones, su ubicación los hace
                    prácticamente invisibles para la vida cotidiana del campus. Solo los deportistas —y
                    quienes van a verlos— los conocen.
                </div>
            </div>
        </section>
    </div>
}
export default CollectionTwo;