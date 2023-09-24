import { FooterList } from "./FooterList";

export const Footer = () => {
  return (
    <footer>
      <div>
        <h2 className="title2">Contato</h2>
        <ul>
          <FooterList />
        </ul>
      </div>

      <p className="paragraph">Todos os direitos reservados - José da Silva</p>
    </footer>
  );
};
