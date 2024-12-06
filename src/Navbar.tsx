import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">Deep Inside Us</h1>
                <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <li>
                        <Link to="/" onClick={() => setIsOpen(false)}>🏠 Home</Link>
                    </li>
                    <li>
                        <Link to="/movai" onClick={() => setIsOpen(false)}>🚀 Movai</Link>
                    </li>
                    <li>
                        <Link to="/ergonomie" onClick={() => setIsOpen(false)}>📐 Ergonomie</Link>
                    </li>
                    <li>
                        <Link to="/credits" onClick={() => setIsOpen(false)}>✨ Credits</Link>
                    </li>
                    <li>
                        <a
                            href={`${window.location.protocol}//${window.location.hostname}:3000`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >🔎 SUPERVISION </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
