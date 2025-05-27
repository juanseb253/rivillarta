import { Link } from "react-router-dom"

import "./styles.css"
import { useIsMobile } from "../../hooks/mobileHook";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [animando, setAnimando] = useState(false);
    const isMobile = useIsMobile();

    const mobileClass = isMobile ? "mobile" : "web";
    const transition = !animando ? "div-entrada" : "div-salida";

    const cerrar = () => {
        setAnimando(true); // activa clase de salida
        setTimeout(() => {
            setMenuOpen(false); // oculta el div después de la animación
            setAnimando(false); // reinicia animación
        }, 500); // mismo tiempo que la animación
    };
    const abrir = () => {
        if (isMobile) {
            setMenuOpen(!menuOpen)
        }
    };

    const toggleMenu = menuOpen ? cerrar : abrir;




    return <div className={`navbar-container ${mobileClass}`}>
        <div className="main-title">
            rivillarta
        </div>

        {isMobile && (
            <button
                className="menu-button"
                onClick={toggleMenu}
            >
                {menuOpen ? "✕" : "☰"}
            </button>
        )}
        {!isMobile && <nav className="web-nav">
            <ul>
                <li>
                    <Link to="/">colecciones</Link>
                </li>
                <li>
                    <Link to="/products">productos</Link>
                </li>
                <li>
                    <Link to="/contact">contactanos</Link>
                </li>
                <li>
                    <Link to="/about">acerca de</Link>
                </li>
            </ul>
        </nav>}
        {isMobile && menuOpen && (
            <div className={`mobile-nav ${transition}`}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" onClick={toggleMenu}>colecciones</Link>
                        </li>
                        <li>
                            <Link to="/products" onClick={toggleMenu}>productos</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={toggleMenu}>contactanos</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={toggleMenu}>acerca de</Link>
                        </li>
                    </ul>
                </nav></div>)}
    </div>

}
export default Navbar; 