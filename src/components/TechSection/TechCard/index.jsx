export const TechCard = ({ source, technology }) => {
  return (
    <li>
      <img src={source} alt={technology} />
      <span>{technology}</span>
    </li>
  );
};
