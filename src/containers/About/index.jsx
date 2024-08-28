import "./index.scss";
import Section from "../../components/Section";
import CardsMembers from "../../components/CardsMember"
import Technologies from "../../components/Technologies"

const section1 = {
  title: "Conheça o nosso incrível time.",
  description: "Essas são as pessoas que fazem parte disso tudo.",
};

const section2 = {
  title: "Conheça as tecnologias que utilizamos.",
  description: "Confira as tecnologias usadas neste projeto."
};

function About() {
  return (
    <div className="about">
      <Section {...section1}>
        <CardsMembers />
      </Section>
      <Section {...section2}>
        <Technologies/>
      </Section>
    </div>
  );
}

export default About
