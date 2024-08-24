import './Home.scss'
import HeroSection from '../sections/HeroSection'
import Section from '../sections/Section'
import Cards from '../elements/Cards'
import CTA from '../elements/CTA'

const section1 = {
    title: "Prezamos pela melhor experiência de atendimento.",
    description: "Garantimos um suporte otimizado e eficiente, oferecendo uma experiência personalizada através de IA e uma estrutura que foca na agilidade."
}

const section2 = {
    title: "Aumente a Eficiência do Seu Suporte.",
    description: "Descubra como nossa solução pode otimizar seu atendimento e acelerar a resolução de chamados."
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