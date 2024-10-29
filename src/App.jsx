import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="container flex-grow-1">
                <About />
                <Portfolio />
                <Contact />
                <Resume />
            </main>
            <Footer />
        </div>
    );
}

export default App;
