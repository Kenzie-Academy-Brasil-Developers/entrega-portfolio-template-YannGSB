import bannerImg from "../../assets/banner-img.png";

export const BannerSection = () => {
  return (
    <section>
      <span className="label">JOSEDASILVA</span>
      <h1 className="title1">Bem vindo ao meu portfólio</h1>
      <p className="paragraph">Uma frase interessante sobre mim</p>
      <button>Saiba mais</button>
      <img src={bannerImg} alt="" />
    </section>
  );
};
