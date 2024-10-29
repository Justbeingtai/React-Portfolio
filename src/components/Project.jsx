import React from 'react';

function Project({ title, description, link, repo }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>Live Demo</a> | <a href={repo}>GitHub Repo</a>
        </div>
    );
}

export default Project;
