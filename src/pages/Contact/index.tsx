import { useState } from "react";
import Card from "../../Components/Card";
import Input from "../../Components/Input";

import "./styles.css"

const Contact = () => {
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [nomError, setNomError] = useState(false);
    const [apError, setApError] = useState(false);
    const [corError, setCorError] = useState(false);
    const [corFormatErr, setCorFormatErr] = useState(false);

    const [alreadySend, setAlreadySend] = useState(false);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleErase = () => {
        if (nombres == "") {
            setNomError(true);
        }
        if (apellidos == "") {
            setApError(true);
        }
        if (correo == "") {
            setCorError(true);
        }
        if (!regex.test(correo) && correo !== "") {
            setCorFormatErr(true)
        }
        if (nombres !== "" && apellidos !== "" && correo !== "" && regex.test(correo)) {
            setApellidos("");
            setNombres("");
            setCorreo("");
            setAlreadySend(true);
            setTimeout(() => { setAlreadySend(false); }, 5000);
        }

    }



    return (
        <div className="contact-us">
            <div>
                <h2>Contáctanos para transformar juntos el espacio urbano</h2>
                <p>Estamos comprometidos en replantear cómo la arquitectura y el espacio público pueden servir mejor a la comunidad caleña. Si compartes nuestra visión de espacios urbanos inclusivos y centrados en la sociedad, queremos saber de ti. Completa el formulario a continuación para colaborar en proyectos que desafíen el gobierno y promuevan un cambio positivo en nuestra ciudad.</p>
            </div>
            {!alreadySend &&
                <Card>
                    <Input label={"Nombres"} state={nombres} setState={setNombres} error={nomError} setError={setNomError} />
                    <Input label={"Apellidos"} state={apellidos} setState={setApellidos} error={apError} setError={setApError} />
                    <Input label={"Correo"} state={correo} setState={setCorreo} error={corError} setError={setCorError} type="email" corErr={corFormatErr} setCorErr={setCorFormatErr} />
                    <button className="enviar-button" onClick={handleErase}>Enviar</button>
                </Card>
            }

            {alreadySend && <div>Muchas gracias por tu mensaje, te estaremos contactando pronto!</div>}
        </div>
    );
};

export default Contact;