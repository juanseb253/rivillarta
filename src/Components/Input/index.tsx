import "./styles.css"

const Input = ({ label, state, setState, error, setError, type = "text", corErr = false, setCorErr = () => { } }) => {
    const handleChange = (e) => {
        setError(false)
        setState(e.target.value)
        if (corErr) {
            setCorErr(false)
        }
    }
    const borderClass = error || corErr ? "border-error" : "";
    return <div className="input-container">
        <p>{label}</p>
        <input value={state} onChange={(e) => handleChange(e)} className={`input-bonito ${borderClass}`} type={type}></input>
        {error && <p className="input-error">Ingresa este dato</p>}
        {corErr && <p className="input-error">Ingresa un correo valido</p>}
    </div>
}

export default Input;