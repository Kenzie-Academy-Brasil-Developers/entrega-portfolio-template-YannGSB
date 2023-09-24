import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <section>
      <h2 className="title2">Projetos</h2>
      <ul>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ul>
    </section>
  );
};
