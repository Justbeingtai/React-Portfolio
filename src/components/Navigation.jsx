import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resume">Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
