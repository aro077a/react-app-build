const LeftArrowIcon = ({ onClick }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='35'
      height='17'
      viewBox='0 0 35 17'
      className='left__arrow__icon'
      onClick={onClick}
    >
      <path
        fill='#6b7280'
        d='M.343 8.152L9.282.64a.985.985 0 0 1 1.374.108.951.951 0 0 1-.109 1.352L3.59 7.949h30.435a.961.961 0 1 1 0 1.922H3.64l6.91 5.848a.952.952 0 0 1 .1 1.355.984.984 0 0 1-1.375.1L.34 9.613a.951.951 0 0 1 0-1.461z'
        transform='translate(0 -.41)'
      />
    </svg>
  );
};

export default LeftArrowIcon;
