import './Home.scss'
import HeroSection from '../components/sections/HeroSection'
import Section from '../components/sections/Section'
import Cards from '../components/elements/Cards'
import CTA from '../components/elements/CTA'

const section1 = {
    title: "Prezamos pela melhor experiência de atendimento.",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquam lacus hendrerit nisi feugiat, ex sapien hac risus. Ligula duis sollicitudin mauris lacus; ante facilisi."
}

const section2 = {
    title: "Um titulo qualquer",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquam lacus hendrerit nisi feugiat, ex sapien hac risus. Ligula duis sollicitudin mauris lacus; ante facilisi."
}

function Home () {
    return (
        <div className='home'>
            <HeroSection/>
            <Section {...section1}>
                <Cards/>
            </Section>
            <Section {...section2}>
                <CTA/>
            </Section>
        </div>
    )
}

export default Home