
function Arrow (props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
        >
        <path
            fill={props.color}
            d="M12 4a1 1 0 1 1 0-2h8a2 2 0 0 1 2 2v8a1 1 0 1 1-2 0V5.393L3.728 21.666a1 1 0 0 1-1.414-1.415L18.565 4H12Z"
        />
      </svg>
    )
}
export default Arrow
