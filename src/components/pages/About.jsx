import './About.scss'
import Section from '../sections/Section'
import CardsMembers from '../elements/CardsMember'

const section1 = {
    title: "Conheça o nosso incrível time.",
    description: "Essas são as pessoas que fazem parte disso tudo."
}

const section2 = {
    title: "Conheça as tecnologias que utilizamos.",
    description: "Essas são as pessoas que fazem parte disso tudo."
}

function About () {
    return (
        <div className="about">
            <Section {...section1}>
                <CardsMembers/>
            </Section>
            <Section {...section2}>
                Tecnologias usadas

            </Section>
        </div>
    )
}

export default About