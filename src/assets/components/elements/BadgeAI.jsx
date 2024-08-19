import './BadgeAI.scss'
import IconStars from '../../svg/IconStars'

function BadgeAI () {
    return (
        <div className='badge-ai'>
            <IconStars color={"#e1ffff"} height={14}/>
            <div>
                Feito com IA.
            </div>
        </div>
    )
}

export default BadgeAI