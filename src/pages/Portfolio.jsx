import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <Project title="Project 1" description="A cool project" link="#" repo="#" />
            {/* Add more <Project /> components here */}
        </section>
    );
}

export default Portfolio;
