import './Card.scss'
import Grid from '../../assets/svg/Grid.jsx'

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
