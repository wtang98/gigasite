import logo from "../../assets/giga logo.png";
import { Link } from "react-router";

import "./header.scss";

export const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} className="header-logo" alt="logo" />
            </Link>
            <div className="header-container">
                <Link to="/about">About Us</Link>
                <Link to="/securities">Securities</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </header>
    );
};
