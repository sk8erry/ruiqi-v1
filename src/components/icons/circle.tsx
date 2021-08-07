import * as React from 'react'
import { theme } from '../../styles'

interface IPROPS {
  size: number
}

export const Circle: React.FC<IPROPS> = ({ size }) => (
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
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
)
