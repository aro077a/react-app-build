import { FC } from 'react'

interface HeaderLogoProps {
  className?: string
}

const MobileLogo: FC<HeaderLogoProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60.356"
      height="37.052"
      viewBox="0 0 60.356 37.052"
      className={className}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#e5e7eb" />
          <stop offset="1" stopColor="#e5e7eb" />
        </linearGradient>
      </defs>
      <g id="AR" transform="translate(0 0)">
        <path
          id="Path_9869"
          data-name="Path 9869"
          d="M3450.263,770.307a5.984,5.984,0,0,1,.9-.177c6.7.039,13.4.011,20.09.15a18.866,18.866,0,0,1,3.007.289,16.8,16.8,0,0,1,6.623,2.667c6.428,4.4,6.423,12.985-.012,17.39-3.514,2.405-7.5,2.957-11.644,3.207a4.768,4.768,0,0,1-5.134-2.776c-1.327-2.453-2.648-4.277-4.341-6.859,1.093.055,1.513.062,2.206.055,2.653-.027,4.968.105,7.617-.042,3-.166,3.393-.859,3.434-2.221.042-1.4-.48-2.235-3.261-2.17-3.721.088-7.445.188-11.168.185-1.166,0-1.812.13-2.412-.808C3454.3,776.276,3452.335,773.413,3450.263,770.307Z"
          transform="translate(-3425.341 -770.13)"
          fill="#03c4c7"
        />
        <path
          id="Path_9870"
          data-name="Path 9870"
          d="M3362.544,777.511l23.946,36.541c-3.826,0-7.324.027-10.82-.04-.361-.007-.806-.508-1.054-.884q-8.566-13-17.067-26.049a1.849,1.849,0,0,1-.189-1.583C3358.98,782.869,3360.708,780.309,3362.544,777.511Z"
          transform="translate(-3338.584 -777.014)"
          fill="#03c4c7"
        />
        <path
          id="Path_9871"
          data-name="Path 9871"
          d="M3079.659,950.321l17.514-26.725c1.857,2.848,3.613,5.491,5.289,8.185a1.554,1.554,0,0,1-.23,1.287q-5.323,8.207-10.727,16.36a1.909,1.909,0,0,1-1.237.855C3086.853,950.352,3083.436,950.321,3079.659,950.321Z"
          transform="translate(-3079.659 -913.276)"
          fill="#03c4c7"
        />
        <path
          id="Path_9872"
          data-name="Path 9872"
          d="M3717.443,1142.872c-3.566,0-6.806.014-10.044-.022a1.316,1.316,0,0,1-.943-.495c-2.476-3.765-4.915-7.555-7.441-11.46,2.547-.205,4.9-.3,7.225-.608,2.74-.368,2.729-.45,4.221,1.845Z"
          transform="translate(-3657.365 -1105.884)"
          fill="#03c4c7"
        />
      </g>
    </svg>
  )
}

export default MobileLogo
