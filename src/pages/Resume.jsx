import React from 'react';

function Resume() {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <p>Download my <a href="/resume.pdf" download>Resume</a></p>
            <h3>Proficiencies</h3>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                {/* Add more proficiencies */}
            </ul>
        </section>
    );
}

export default Resume;
