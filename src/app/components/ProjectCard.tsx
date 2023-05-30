import React from "react";
import { projectData } from "../routes/project";
import Image from "next/image";

export function ProjectCard(): JSX.Element {
  return (
    <div className="project-container" id="project">
      <h1 className="project">Projects</h1>
      <div className="flex flex-col w-4/5 md:max-w-lg max-w-md justify-center items-center lg:ml-96 md:ml-72">
        {projectData.map((project, index) => {
          return (
            <div className="project-card" key={index}>
              <div className="project-image" key={index}>
                <Image
                  src={project.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={project.name}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="project-header" key={index}>
                {project.name}
              </div>
              <div className="project-description" key={index}>
                {project.description}
              </div>
              <div className="project-link" key={index}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link 👉
                </a>
              </div>
              <div className="project-used" key={index}>
                {project.used.map((item, index) => {
                  return (
                    <button className="used-button" key={index}>
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
