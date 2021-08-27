import { FC } from 'react'

import { IconProps } from './model'

const CloseIcon: FC<IconProps> = ({ onClick, className }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="53.7"
      height="53.7"
      viewBox="0 0 53.7 53.7"
    >
      <path
        fill="#ffffff"
        d="M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z"
      />
    </svg>
  )
}

export default CloseIcon
