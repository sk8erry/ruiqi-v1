//@ts-ignore
import { css } from 'styled-components'

export interface IMedia {
  giant: Function
  bigDesktop: Function
  desktop: Function
  tablet: Function
  thone: Function
  phablet: Function
  phone: Function
  tiny: Function
}

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => {
    return css`
      @media (max-width: ${emSize}em) {
        ${css(
          //@ts-ignore
          ...args
        )};
      }
    `
  }
  return accumulator
}, {})

export default media as IMedia
