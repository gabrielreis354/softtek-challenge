/* eslint-disable react/prop-types */
import './index.scss'
import Grid from '../../../assets/svg/Grid'

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