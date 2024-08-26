<<<<<<<< HEAD:src/components/elements/BadgeAI/index.jsx
import './index.scss'
import IconStars from '../../../assets/svg/IconStars'
========
import './BadgeAI.scss'
import IconStars from '../../assets/svg/IconStars.jsx'
>>>>>>>> 41a40e0664dbb8a07287f72a6162d0aaf6e1a014:src/components/Badge/BadgeAI.jsx

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
