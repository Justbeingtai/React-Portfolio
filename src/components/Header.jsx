import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="bg-dark text-light py-4">
            <div className="container">
                <h1 className="display-4">My React Portfolio</h1>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
