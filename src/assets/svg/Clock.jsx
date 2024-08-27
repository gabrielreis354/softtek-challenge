
function Clock (props) {
    return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={props.height}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 7v5l2.5-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
    </svg>
)
}
export default Clock
