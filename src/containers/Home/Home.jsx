import './Home.scss';
import React, { useMemo } from 'react';
import HeroSection from '../../components/Hero/HeroSection.jsx';
import Section from '../../components/Section/Section.jsx';
import Cards from '../../components/Cards/Cards.jsx';
import CTA from '../../components/CTA/CTA.jsx';

const Home = () => {
  const section1 = useMemo(() => ({
    title: "Prezamos pela melhor experiência de atendimento.",
    description: "Garantimos um suporte otimizado e eficiente através de uma experiência personalizada através de IA."
  }), []);

  const section2 = useMemo(() => ({
    title: "Aumente a Eficiência do Seu Suporte.",
    description: "Descubra como nossa solução pode otimizar seu atendimento e acelerar a resolução de chamados."
  }), []);

  return (
    <div className='home'>
      <HeroSection />
      <Section {...section1}>
        <Cards />
      </Section>
      <Section {...section2}>
        <CTA />
      </Section>
    </div>
  );
};

export default React.memo(Home);
