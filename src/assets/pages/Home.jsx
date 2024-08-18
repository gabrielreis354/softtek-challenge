import './Home.scss'
import BadgeAI from '../components/BadgeAI'
import Grid from '../svg/Grid'
import Ai from '../svg/Ai'


function Home () {
    return (
        <>
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

        <section className='section'>
            <div className='section-content'>
                <div className='section-content-title'>
                    <h2>
                        Prezamos pela melhor experiência de atendimento.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde provident molestias tempora eius mollitia tempore earum iure accusantium, porro, aliquam quam quia placeat sunt repudiandae itaque.
                    </p>
                </div>
                <div className='section-features'>
                <div className='section-feature'>
                        <Grid className={"grid-svg"} color={"#fff"}/>
                        
                        <div className='section-feature-inner'>
                            <div className='section-feature-icon'>
                                <Ai color={"#e1ffff"} height={"44"}/>
                            </div>
                            <div className='section-feature-title'>
                                Feature 01
                            </div>
                            <div className='section-feature-text'>
                                They are easy because they are poors. Falei, Mamae. Feature benefits will be writed here, aleatory words for make it be nice like a real text my friend hello world russian girls naked.
                            </div>
                        </div>
                    </div>
                    <div className='section-feature'>
                        <Grid className={"grid-svg"} color={"#fff"}/>
                        <div className='section-feature-inner'>
                            <div className='section-feature-icon'>
                                <Ai color={"#e1ffff"} height={"44"}/>
                            </div>
                            <div className='section-feature-title'>
                                Feature 01
                            </div>
                            <div className='section-feature-text'>
                                They are easy because they are poors. Falei, Mamae. Feature benefits will be writed here, aleatory words for make it be nice like a real text my friend hello world russian girls naked.
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
        </>

    )
}

export default Home