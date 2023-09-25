import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";

export const ProjectSection = () => {
  return (
    <section>
      <h2 className="title2">Projetos</h2>
      <ul>
        {projects.map((project) => {
          return (
            <li>
              <ProjectCard
                description={project.description}
                name={project.name}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
