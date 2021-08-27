import { FC } from 'react'

import { IconProps } from './model'

const PlayIcon: FC<IconProps> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="112"
      viewBox="0 0 112 112"
    >
      <g>
        <g
          fill="none"
          stroke="#03c4c7"
          strokeWidth="2px"
          transform="translate(-1184 -468) translate(1184 468)"
        >
          <circle cx="56" cy="56" r="56" stroke="none" />
          <circle cx="56" cy="56" r="55" />
        </g>
        <path
          fill="#03c4c7"
          d="M12.375 3.132a2 2 0 0 1 3.493 0l10.717 19.216a2 2 0 0 1-1.747 2.974H3.405a2 2 0 0 1-1.747-2.974z"
          transform="translate(-1184 -468) rotate(90 373.34 883.218)"
        />
      </g>
    </svg>
  )
}

export default PlayIcon
