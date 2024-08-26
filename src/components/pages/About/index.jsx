import "./index.scss";
import Section from "../../sections/Section";
import CardsMembers from "../../elements/CardsMember";
import iconHtml from "../../../assets/img/html.png";
import iconCss from "../../../assets/img/css-3.png";
import iconJs from "../../../assets/img/js.png";
import iconReact from "../../../assets/img/atom.png"
import iconSass from "../../../assets/img/sass.png"


const section1 = {
  title: "Conheça o nosso incrível time.",
  description: "Essas são as pessoas que fazem parte disso tudo.",
};

const section2 = {
  title: "Conheça as tecnologias que utilizamos.",
};

function About() {
  return (
    <div className="about">
      <Section {...section1}>
        <CardsMembers />
      </Section>
      <Section {...section2}>
        <h2>Tecnologias usadas</h2>
        <div className="tecnologias">
          <div className="tecnologia_wrapper">            
            <div className="tecnologia_icon">
              <img src={iconHtml} alt="tecnologia" />
            </div>
            <div className="tecnologia_name">HTML 5</div>
          </div>
          <div className="tecnologia_wrapper">            
            <div className="tecnologia_icon">
              <img src={iconCss} alt="tecnologia" />
            </div>
            <div className="tecnologia_name">CSS</div>
          </div>
          <div className="tecnologia_wrapper">            
            <div className="tecnologia_icon">
              <img src={iconJs} alt="tecnologia" />
            </div>
            <div className="tecnologia_name">JavaScript</div>
          </div>
          <div className="tecnologia_wrapper">            
            <div className="tecnologia_icon">
              <img src={iconReact} alt="tecnologia" />
            </div>
            <div className="tecnologia_name">React</div>
          </div>
          <div className="tecnologia_wrapper">            
            <div className="tecnologia_icon">
              <img src={iconSass} alt="tecnologia" />
            </div>
            <div className="tecnologia_name">Sass</div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default About;
