import React from "react";
import portfolioImage1 from "../../assets/budget-tracker.png";
import portfolioImage2 from "../../assets/project1.png";
import portfolioImage3 from "../../assets/project2.png";
import portfolioImage4 from "../../assets/weather.png";

function Project() {
    const projects = [
     {
        name: "Budget Tracker",
        image: portfolioImage1,
        deployedUrl: " https://still-ridge-11919.herokuapp.com/", 
        githubUrl: "https://github.com/Oindrila11/your-budget.git",
     },
     {
        name: "Project1",
        image: portfolioImage2,
        deployedUrl: "https://projectbootcamp4.github.io/boot-bank/" ,
        githubUrl: "https://github.com/projectbootcamp4/boot-bank.git",
     },
     {
        name: "project2",
        image: portfolioImage3,
        deployedUrl: "https://github.com/2ndblinddate/project-2nd-blind-date" ,
        githubUrl: "https://github.com/2ndblinddate/project-2nd-blind-date.git",
     },
     {
        name: "Weather Tracker",
        image: portfolioImage4,
        deployedUrl: "https://oindrila11.github.io/weather-wind-hot-cold-what-not/" ,
        githubUrl: "https://github.com/Oindrila11/weather-wind-hot-cold-what-not.git",
     },
    ];

    return (
		<div className="container">
			<div className="row g-3">
				{projects.map((project) => {
					return (
						<div key={project.name} className="col-12 col-md-6 col-lg-4 mb-3">
							<div className="card">
								<img
									src={project.image}
									alt={project.name}
									className="card-img-top"
								></img>
								<div className="card-body">
									<h5 className="card-title text-center projectName">
										{project.name}
									</h5>
									<a
										target="_blank"
										rel="noreferrer"
										href={project.deployedUrl}
										className="card-text linkProject"
									>
										Deployed project
									</a>
									<br />
									<a
										target="_blank"
										rel="noreferrer"
										href={project.githubUrl}
										className="card-text linkProject"
									>
										Github Repository
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Project;

