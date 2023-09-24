import { Header } from "../../components/Header";
import { BannerSection } from "../../components/BannerSection";
import { AboutMeSection } from "../../components/AboutMeSection";
import { TechSection } from "../../components/TechSection";
import { ProjectSection } from "../../components/ProjectsSection";
import { Footer } from "../../components/Footer";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectSection />
      <Footer />
    </>
  );
};
