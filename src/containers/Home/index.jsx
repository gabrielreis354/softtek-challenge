import './index.scss'
import HeroSection from "../../components/HeroSection";
import Section from "../../components/Section";
import Cards from "../../components/Cards";
import CTA from "../../components/CTA";

const section1 = {
  title: "Prezamos pela melhor experiência de atendimento.",
  description:
    "Garantimos um suporte otimizado e eficiente através de uma experiência personalizada através de IA.",
};

const section2 = {
  title: "Aumente a Eficiência do Seu Suporte.",
  description:
    "Descubra como nossa solução pode otimizar seu atendimento e acelerar a resolução de chamados.",
};

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <Section {...section1}>
        <Cards />
      </Section>
      <Section {...section2}>
        <CTA />
      </Section>
    </div>
  );
}

export default Home;
