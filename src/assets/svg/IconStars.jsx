function IconStars (props) { 
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
                d="M5 16v4M6 4v4m1 10H3M8 6H4m9-2 1.753 4.444c.188.477.282.715.426.916.127.178.283.334.461.461.2.144.44.238.916.426L21 12l-4.444 1.753c-.477.188-.715.282-.916.426a1.998 1.998 0 0 0-.461.461c-.144.2-.238.44-.426.916L13 20l-1.753-4.444c-.188-.477-.282-.715-.426-.916a1.998 1.998 0 0 0-.461-.461c-.2-.144-.44-.238-.916-.426L5 12l4.444-1.753c.477-.188.715-.282.916-.426.178-.127.334-.283.461-.461.144-.2.238-.44.426-.916L13 4Z"
            />
        </svg>
        )
    }

export default IconStars

