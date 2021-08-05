import * as React from 'react'
import { theme } from '../../styles'

export const Circle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
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
