import './About.scss'
import Section from '../components/sections/Section'
import CardsMembers from '../components/elements/CardsMember'

const section1 = {
    title: "Conheça o nosso incrível time.",
    description: "Essas são as pessoas que fazem parte disso tudo."
}

function About () {
    return (
        <div className="about">
            <Section {...section1}>
                <CardsMembers>

                </CardsMembers>
            </Section>
        </div>
    )
}

export default About