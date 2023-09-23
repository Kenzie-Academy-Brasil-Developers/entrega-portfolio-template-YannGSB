import gitHubIcon from "../../../assets/git-icon.png"

export const ProjectCard = ({ name, description }) => {
  return (
    <li>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href="#">Saiba mais</a>
      </div>
      <img src={gitHubIcon} alt="GitHub logo" />
    </li>
  );
};
