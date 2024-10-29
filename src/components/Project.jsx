import React from 'react';

function Project({ title, description, link, repo }) {
    return (
        <div className="card project-card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={link} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={repo} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
        </div>
    );
}

export default Project;
