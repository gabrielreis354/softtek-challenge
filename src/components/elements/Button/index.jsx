/* eslint-disable react/prop-types */
import './index.scss'

function Button (props) {
    return (
        <button className="button" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button