import gitHubIcon from "../../../assets/git-icon.png"

export const ProjectCard = ({ name, description }) => {
  return (
    <li>
      <div>
        <h3 className="title3">{name}</h3>
        <p className="paragraph">{description}</p>
        <a className="link" href="#">Saiba mais</a>
      </div>
      <img src={gitHubIcon} alt="GitHub logo" />
    </li>
  );
};
