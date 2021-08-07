import * as React from 'react'
import { theme } from '../../styles'

interface IPROPS {
  size: number
}

export const Triangle: React.FC<IPROPS> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors.green}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 20h18L12 4z"></path>
    </svg>
  )
}
