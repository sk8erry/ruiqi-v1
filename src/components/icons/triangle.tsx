import * as React from 'react'
import { theme } from '../../styles'

export const Triangle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors.blueGrey}
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 20h18L12 4z"></path>
    </svg>
  )
}
