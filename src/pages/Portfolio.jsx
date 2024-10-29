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
        // Add more projects as needed
    ];

    return (
        <section id="portfolio" className="my-5">
            <div className="container">
                <h2 className="text-center mb-4">Portfolio</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <Project 
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                repo={project.repo}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
