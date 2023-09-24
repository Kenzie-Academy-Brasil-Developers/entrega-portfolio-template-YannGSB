export const TechCard = ({ source, technology }) => {
  return (
    <li>
      <img src={source} alt={technology} />
      <span className="title3">{technology}</span>
    </li>
  );
};
