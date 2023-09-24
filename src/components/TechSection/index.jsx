import { TechCard } from "./TechCard";

export const TechSection = () => {
  return (
    <section>
      <h2 className="title2">Tecnologias</h2>
      <ul>
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
      </ul>
    </section>
  );
};
