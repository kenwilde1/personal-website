import { useEffect, useState } from "react";
import Project from "./Project";

import projects from "../../projects";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="section" id="projects">
      <div className="container is-narrow">
        <div className="columns">
          <div className="column my-projects-container">
            <div className="my-projects-header">
              <h1 className="title">
                My <span className="highlight">Projects</span>
              </h1>
            </div>
            <div className="my-projects-input">
              <div className="control">
                <input
                  className="input is-danger is-rounded is-normal"
                  type="text"
                  placeholder="Filter - e.g 'html'"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="project-grid mt-6">
          <div className="columns is-multiline is-variable">
            {searchTerm === ""
              ? projects.map((project) => (
                  <Project
                    name={project.id}
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    live={project.live}
                    code={project.code}
                    techOne={project.technologies[0]}
                    techTwo={project.technologies[1]}
                    techThree={project.technologies[2]}
                    techFour={project.technologies[3]}
                    techFive={project.technologies[4]}
                  />
                ))
              : projects
                  .filter((project) => project.tech.includes(searchTerm))
                  .map((project) => {
                    console.log(project);

                    return (
                      <Project
                        name={project.id}
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        img={project.img}
                        live={project.live}
                        code={project.code}
                        techOne={project.technologies[0]}
                        techTwo={project.technologies[1]}
                        techThree={project.technologies[2]}
                      />
                    );
                  })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
