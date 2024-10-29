import React from 'react';
import Project from '../components/Project';

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
        // Add more projects as needed
    ];

    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <Project 
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    repo={project.repo}
                />
            ))}
        </section>
    );
}

export default Portfolio;
