import { FooterList } from "./FooterList";

export const Footer = () => {
  return (
    <footer className="footer__container">
      <div>
        <h2>Contato</h2>
        <ul>
          <FooterList />
        </ul>
      </div>

      <p>Todos os direitos reservados - José da Silva</p>
    </footer>
  );
};
