import { FooterList } from "./FooterList";
import { user } from "../../data/user";

export const Footer = () => {
  return (
    <footer>
      <div>
        <h2 className="title2">Contato</h2>
        <ul>
          <FooterList />
        </ul>
      </div>

      <p className="paragraph">Todos os direitos reservados - {user}</p>
    </footer>
  );
};
