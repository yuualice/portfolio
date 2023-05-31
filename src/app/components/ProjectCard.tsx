import React from "react";
import { projectData } from "../routes/project";
import Image from "next/image";

export function ProjectCard(): JSX.Element {
  return (
    <div className="project-container" id="project">
      <div className="flex flex-col mt-5 md:justify-between md:flex-row w-3/4 h-full items-stretch">
        <h1 className="project-title">Featured projects.</h1>
        <div className="flex flex-col self-center lg:max-w-2xl md:max-w-l max-w-md">
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
                    👉 Link
                  </a>
                </div>
                <div className="project-used" key={index}>
                  {project.used.map((item, index) => {
                    return (
                      <span className="used-button" key={index}>
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
