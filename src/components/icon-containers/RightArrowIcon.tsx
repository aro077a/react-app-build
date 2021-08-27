const RightArrowIcon = ({ onClick }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="17"
      viewBox="0 0 35 17"
      className="right__arrow__icon"
      onClick={onClick}
    >
      <path
        fill="#6b7280"
        d="M34.657 8.152L25.718.64a.985.985 0 0 0-1.374.108.951.951 0 0 0 .109 1.352l6.957 5.849H.975a.961.961 0 1 0 0 1.922H31.36l-6.91 5.848a.952.952 0 0 0-.1 1.355.984.984 0 0 0 1.375.1l8.935-7.561a.951.951 0 0 0 0-1.461z"
        transform="translate(0 -.41)"
      />
    </svg>
  )
}

export default RightArrowIcon
