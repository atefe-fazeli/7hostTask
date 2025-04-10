import Footer from "@/components/modules/footer/footer";
import About from "@/components/templates/index/about/about";
import CTASection from "@/components/templates/index/cta/cta";
import FAQ from "@/components/templates/index/faq/faq";
import Hero from "@/components/templates/index/hero/hero";
import TemplateLibrary from "@/components/templates/index/library/ibrary";
import SectionOne from "@/components/templates/index/sectionOne";
import CustomSwiper from "@/components/templates/index/swiper/swiper";

export default function Home() {
  const slides = [
    {
      id: 1,
      src: "/images/swiper.png",
      title: "Risk-free 30 day trial tolevel up your team’s productivity.",
      desc: "Get started now and take advantage of our 30 day free trial today. No credit card required.  ",
    },
    {
      id: 2,
      src: "/images/swiper.png",
      title: "Risk-free 30 day trial tolevel up your team’s productivity.",
      desc: "Get started now and take advantage of our 30 day free trial today. No credit card required.  ",
    },
    {
      id: 3,
      src: "/images/swiper.png",
      title: "Risk-free 30 day trial tolevel up your team’s productivity.",
      desc: "Get started now and take advantage of our 30 day free trial today. No credit card required.  ",
    },
    {
      id: 4,
      src: "/images/swiper.png",
      title: "Risk-free 30 day trial tolevel up your team’s productivity.",
      desc: "Get started now and take advantage of our 30 day free trial today. No credit card required.  ",
    },
  ];

  return (
    <>
      <Hero />
      <About />
      <SectionOne />
      <TemplateLibrary />
      <CustomSwiper slides={slides} />
      <FAQ />
      <CTASection />
    </>
  );
}
