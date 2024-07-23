import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <div className="container projects" id="projects">
      <h2>PROJECTS</h2>
      <div className="row d-flex justify-content-center align-content-center">
        {project.map((data) => (
          <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
            <div
              className="card text-light project-card"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.source} className="btn btn-warning">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
