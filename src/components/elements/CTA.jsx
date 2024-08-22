

import './CTA.scss'
import Card from "./Card"
import Button from './Button'
import {Link} from 'react-router-dom'

function CTA () {
    return (
        <div className='cta-card'>
            <div className='glow-bubble'></div>

            <Card>
                <div className="card-flex">
                    <div className="card-left card-side">
                        <h2>
                            Melhore A Eficiência Do Seu Suporte com a EasyCall!
                        </h2>
                        <p>
                            Teste a EasyCall e veja como nossa plataforma pode agilizar a resolução de chamados e aprimorar o suporte ao cliente. Comece agora!
                        </p>
                        <Link to={"/login"}>
                            <Button>
                                Começar Agora
                            </Button>
                        </Link>

                    </div>
                    <div className="card-right card-side">
                        <div className='card-img'>

                        </div>
                    </div>

                </div>
            </Card>
        </div>
    )
}

export default CTA