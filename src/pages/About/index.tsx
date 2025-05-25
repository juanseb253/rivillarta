import rivillartaPng from "../../assets/rivillarta.png"
import miraSoyPng from "../../assets/mira-soy.png"
import cafePng from "../../assets/cafe.png"

import "./styles.css"
const About = () => (
    <div className="info-container">
        <section className="first-info">
            <div className="text-container">
                <div>
                    <h1>Rivillarta: Arquitectura Crítica y Espacio Público Consciente</h1>
                    <p>En Rivillarta, cuestionamos la arquitectura convencional que prioriza la rentabilidad económica por encima del bienestar social. Representando la voz caleña, promovemos un enfoque que devuelve el espacio público a la comunidad, alentando a las personas a reflexionar y actuar sobre las realidades urbanas que a menudo pasan desapercibidas.</p>
                </div>
            </div>
            <div className="img-container">
                <img className="rivillarta-png" src={rivillartaPng} alt="a" />
            </div>
        </section>
        <section className="second-info">
            <div className="img-container">
                <img className="rivillarta-png" src={miraSoyPng} alt="a" />
            </div>
            <div className="text-container">
                <div>
                    <h3>quien es rivillarta</h3>
                    <p>Rivillarta es una propuesta de crítica social que, a través del muralismo y con enfoque en el social critic cartoons, cuestiona la mala arquitectura en Cali, visibilizando los impactos negativos que genera sobre el territorio y la comunidad. El proyecto promueve una mirada sostenible al denunciar el daño ambiental causado por construcciones irresponsables, y fomenta la innovación al dar voz a pensamientos colectivos que normalmente no encuentran espacio para expresarse. A través del arte en el espacio público, Rivillarta busca vincularse con la comunidad, generar diálogo y construir de manera colectiva una visión más consciente y justa del entorno urbano.</p>
                </div>
            </div>
        </section>
        <section className="first-info">
            <div className="text-container">
                <p>se pretende que cuando Rivillarta logre una popularidad y una buena acogida de un publico que la apoye, podrá salir a las calles a pintar muros y hacer mas obvio y evidente para cualquier ciudadano los problemas existentes y sin miedo a ser silenciada poder expresar lo que nadie es capaz de decir.</p>
            </div>
            <div className="img-container">
                <img className="rivillarta-png" src={cafePng} alt="a" />
            </div>
        </section>
    </div>
);

export default About;