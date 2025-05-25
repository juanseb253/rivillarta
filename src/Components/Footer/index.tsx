import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./styles.css"

const Footer = () => (
    <div className="footer-container">
        <div className="contact-info">
            <h4>rivillarta</h4>
            <div className="button-icon-container">
                <a href="https://www.instagram.com/_rivillarta_">
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "#FFFFFF" }} />
                </a>
                <a href="https://www.tiktok.com/@_rivillarta_?is_from_webapp=1&sender_device=pc">
                    <FontAwesomeIcon icon={faTiktok} size="2x" style={{ color: "#FFFFFF" }} />
                </a>
            </div>
        </div>

        <div className="rights-reserved">© 2025 rivillarta. All rights reserved.</div>
    </div >
)

export default Footer;