import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';

function Portfolio() {
    const projects = [
        {
            title: "Weather Dashboard",
            description: "A web app to check weather forecasts by city.",
            link: "https://deployed-weather-app.com",
            repo: "https://github.com/Justbeingtai/weather-dashboard"
        },
        {
            title: "Task Manager",
            description: "An app to manage tasks and deadlines.",
            link: "https://deployed-task-manager.com",
            repo: "https://github.com/Justbeingtai/task-manager"
        },
        {
            title: "Book Search App",
            description: "Search for books using Google Books API.",
            link: "https://deployed-book-search.com",
            repo: "https://github.com/Justbeingtai/book-search-app"
        }
    ];

    return (
        <div className="portfolio-container">
            <h2 className="text-center">Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
