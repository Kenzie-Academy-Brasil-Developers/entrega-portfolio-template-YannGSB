import portfolioLogo from "../../assets/portfolio.png";
import { HeaderLinks } from "./HeaderLinks";

export const Header = () => {
  return (
    <header className="header">
      <img src={portfolioLogo} alt="Logo do portfólio" />
      <nav>
        <HeaderLinks />
      </nav>
      <button>Contato</button>
    </header>
  );
};
