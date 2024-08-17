import './Home.scss'
import BadgeAI from '../components/BadgeAI'
import Grid from '../svg/Grid'

function Home () {
    return (
        <div className='hero'>
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil veritatis nulla et odit minima architecto.
                </div>
                <div className='glow'>
                    <Grid color={"#fff"} width={"100%"}/>
                </div>

            </div>

        </div>
    )
}

export default Home