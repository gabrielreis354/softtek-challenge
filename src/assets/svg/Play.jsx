
function Play (props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
      >
        <path
          fill={props.color}
          fillRule="evenodd"
          d="M5.465 3.923A1 1 0 0 0 4 4.81V19.19a1 1 0 0 0 1.465.886l13.697-7.192a1 1 0 0 0 0-1.77L5.465 3.923ZM2 4.81c0-2.256 2.397-3.705 4.395-2.656l13.697 7.19c2.14 1.125 2.14 4.19 0 5.313L6.395 21.847C4.397 22.897 2 21.447 2 19.191V4.81Z"
          clipRule="evenodd"
        />
      </svg>
)
}
export default Play
