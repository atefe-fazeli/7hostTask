import Footer from "@/components/modules/footer/footer";
import About from "@/components/templates/index/about/about";
import CTASection from "@/components/templates/index/cta/cta";
import FAQ from "@/components/templates/index/faq/faq";
import Hero from "@/components/templates/index/hero/hero";
import TemplateLibrary from "@/components/templates/index/library/ibrary";
import SectionOne from "@/components/templates/index/sectionOne";
import styles from "@/styles/Home.module.css";
import ProfessionalSwiper from "@/components/templates/index/swiper/swiper";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SectionOne />
      <TemplateLibrary />
      <ProfessionalSwiper />
      <FAQ />
      <CTASection />
    </>
  );
}
