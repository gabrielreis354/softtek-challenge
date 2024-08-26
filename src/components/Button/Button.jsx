<<<<<<<< HEAD:src/components/elements/Button/index.jsx
/* eslint-disable react/prop-types */
import './index.scss'
========
import './Button.scss'
>>>>>>>> 41a40e0664dbb8a07287f72a6162d0aaf6e1a014:src/components/Button/Button.jsx

function Button (props) {
    return (
        <button className="button" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button
