

import './CTA.scss'
import Card from "./Card"

function CTA () {
    return (
        <div className='cta-card'>
            <div className='glow-bubble'></div>

            <Card>
                <div className="card-flex">
                    <div className="card-left card-side">
                        <h2>
                            Este é um texto merda só para constar. Chamada para ação.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nesciunt atque accusantium quas quo tempora consequatur praesentium repellat, commodi odit cumque modi repellendus autem qui harum, sunt magnam maiores magni.
                        </p>
                        <button>
                            some button here
                        </button>
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