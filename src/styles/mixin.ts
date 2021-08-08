import { css } from 'styled-components'
import theme from './theme'
import media from './media'
const { colors, fontSizes, fonts, transition, borderRadius } = theme

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.green};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${transition};
    cursor: pointer;
    color: ${colors.green};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.green};
      outline: 0;
      &:after {
        width: 100%;
        transform: translateY(1px);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.2em;
      background-color: ${colors.green};
      transition: ${transition};
    }
  `,

  smallButton: css`
    color: ${colors.green};
    background-color: transparent;
    border: 1px solid ${colors.green};
    border-radius: ${borderRadius};
    padding: 12px 17px;
    font-size: ${fontSizes.smallish};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${colors.green};
    background-color: transparent;
    border: 1px solid ${colors.green};
    border-radius: ${borderRadius};
    padding: 18px 23px;
    font-size: ${fontSizes.small};
    font-family: ${fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  arrowList: css`
    list-style-type: none;
    padding: 0;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
    li {
      padding: 5px 0;
    }
    li::before {
      content: '▹';
      color: ${colors.green};
      font-size: ${fontSizes.small};
      width: 16px;
      padding-right: 1em;
    }
    font-size: ${fontSizes.xsmall};
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  largeFadeupReady: css`
    opacity: 0;
    transform: translateY(120px);
  `,

  fadeupReady: css`
    opacity: 0;
    transform: translateY(20px);
  `,

  fadeleftReady: css`
    opacity: 0;
    transform: translateX(20px);
  `,

  faderightReady: css`
    opacity: 0;
    transform: translateX(-20px);
  `
}

export default mixins
