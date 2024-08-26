<<<<<<<< HEAD:src/components/elements/Card/index.jsx
/* eslint-disable react/prop-types */
import './index.scss'
import Grid from '../../../assets/svg/Grid'
========
import './Card.scss'
import Grid from '../../assets/svg/Grid.jsx'
>>>>>>>> 41a40e0664dbb8a07287f72a6162d0aaf6e1a014:src/components/Card/Card.jsx

function Card (props) {
    return (
        <div className='card'>
            <Grid className={"grid-svg"} color={"#fff"}/>
            <div className='card-inner'>
                {props.children}
            </div>
        </div>
    )
}

export default Card
