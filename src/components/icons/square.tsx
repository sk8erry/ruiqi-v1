import * as React from 'react'
import { theme } from '../../styles'

export const Square = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 24 24"
    fill="none"
    stroke={theme.colors.green}
    strokeWidth="1"
    strokeLinecap="square"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
)
