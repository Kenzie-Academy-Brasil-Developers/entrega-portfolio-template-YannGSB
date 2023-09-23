import bannerImg from "../../assets/banner-img.png";

export const BannerSection = () => {
  return (
    <section>
      <span>JOSEDASILVA</span>
      <h1>Bem vindo ao meu portfólio</h1>
      <p>Uma frase interessante sobre mim</p>
      <button>Saiba mais</button>
      <img src={bannerImg} alt="" />
    </section>
  );
};
