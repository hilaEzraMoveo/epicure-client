import { Link } from "react-router-dom";
import './Footer.scss'

const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer-links">
                <Link to='/' className="footer-link">Contact Us</Link>
                <Link to='/' className="footer-link">Term Of Use</Link>
                <Link to='/' className="footer-link">Privacy Policy</Link>
            </div>
        </footer>

    )

}
export default Footer;
