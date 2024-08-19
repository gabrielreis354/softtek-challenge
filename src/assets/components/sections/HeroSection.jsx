import Grid from '../../svg/Grid'
import BadgeAI from '../elements/BadgeAI'
import './HeroSection.scss'

function Hero () {
    return (
        <section className='hero'>
            <div className='hero-headline'>
                <BadgeAI/>
                <div className='hero-title'>
                    <h1 className='first-line'>
                        Facilitamos o suporte ao cliente com IA, 
                    </h1>
                    <h1 className='second-line'> 
                        combinando inovação e atenção pessoal.
                    </h1>
                </div>
                <div className='hero-text'>
                    A solução definitiva para facilitar os serviços de suporte técnico do seu negócio.
                </div>
                <div className='glow-grid'>
                    <Grid className={"grid-svg"} color={"#fff"}/>
                    <div className='glow'> </div>
                </div>
            </div>

            <div className='hero-element'>
                <div className='hero-frame'>
                    <div className='hero-frame-top'>
                        <div className='ball ball-red'></div>
                        <div className='ball ball-yellow'></div>
                        <div className='ball ball-green'></div>
                    </div>
                    <div className='hero-frame-content'>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero