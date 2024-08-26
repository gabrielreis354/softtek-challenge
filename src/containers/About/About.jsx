import './About.scss';
import React, { useMemo } from 'react';
import Section from '../../components/Section/Section.jsx';
import CardsMembers from '../../components/CardsMember/CardsMember.jsx';

function About() {
  const section1 = useMemo(() => ({
    title: "Conheça o nosso incrível time.",
    description: "Essas são as pessoas que fazem parte disso tudo."
  }), []);

  const section2 = useMemo(() => ({
    title: "Conheça as tecnologias que utilizamos.",
    description: "Essas são as tecnologias que fazem parte do nosso trabalho diário."
  }), []);

  return (
    <div className="about">
      <Section {...section1}>
        <CardsMembers />
      </Section>
      <Section {...section2}>
        Tecnologias usadas
      </Section>
    </div>
  );
}

export default React.memo(About);
