import './About.scss'
import Section from '../sections/Section'
import CardsMembers from '../elements/CardsMember'

const section1 = {
    title: "Conheça o nosso incrível time.",
    description: "Essas são as pessoas que fazem parte disso tudo."
}

function About () {
    return (
        <div className="about">
            <Section {...section1}>
                <CardsMembers/>
            </Section>
        </div>
    )
}

export default About