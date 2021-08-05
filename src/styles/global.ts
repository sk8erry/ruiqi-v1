import { createGlobalStyle } from 'styled-components'
import * as fontFamilies from './fonts'
import media from './media'
import theme from './theme'

const { fontSizes, fonts, colors, transition, animationDuration, easing } = theme

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreLightWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreLightWOFF}) format('woff'),
    url(${fontFamilies.CalibreLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: optional;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreLightItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreLightItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: optional;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreRegularWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreRegularWOFF}) format('woff'),
    url(${fontFamilies.CalibreRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: optional;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreRegularItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreRegularItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: optional;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreMediumWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreMediumWOFF}) format('woff'),
    url(${fontFamilies.CalibreMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: optional;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreMediumItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreMediumItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: optional;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreSemiboldWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreSemiboldWOFF}) format('woff'),
    url(${fontFamilies.CalibreSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: optional;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreSemiboldItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreSemiboldItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: optional;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoRegularWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoRegularWOFF}) format('woff'),
    url(${fontFamilies.SFMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: optional;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoRegularItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoRegularItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: optional;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoMediumWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoMediumWOFF}) format('woff'),
    url(${fontFamilies.SFMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: optional;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoMediumItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoMediumItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: optional;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoSemiboldWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoSemiboldWOFF}) format('woff'),
    url(${fontFamilies.SFMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: optional;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoSemiboldItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoSemiboldItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: optional;
  }
  body {
    margin: 0px;
    padding: 0px;
    background-color: ${colors.navy};
    color: ${colors.slate};
    font-size: ${fontSizes.large};
    line-height: 1.3;
    ${media.phablet`font-size: ${fontSizes.large};`}
  }
  div {
    color: ${colors.slate};
    font-family: ${fonts.Calibre};
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.green};
      outline: 0;
    }
  }
  .nav-links {
    display: flex;
    list-style: none;
    padding-left: 0;
  }
  .nav-link-item {
    padding-right: 2rem;
  }
  .nav-link-text {
    color: black;
  }
  .fadedown-enter {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity ${animationDuration.medium}ms ${easing}, transform ${animationDuration.medium}ms ${easing};
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity ${animationDuration.medium}ms ${easing}, transform ${animationDuration.medium}ms ${easing};
  }
  .fadedown-exit-active {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity ${animationDuration.medium}ms ${easing}, transform ${animationDuration.medium}ms ${easing};
  }
  .fadedown-exit-done {
    opacity: 0;
    transform: translateY(-20px);
  }
  .lg-fadeup-enter {
    opacity: 0;
    transform: translateY(120px);
    transition: opacity ${animationDuration.long}ms ${easing}, transform ${animationDuration.long}ms ${easing};
  }
  .lg-fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity ${animationDuration.long}ms ${easing}, transform ${animationDuration.long}ms ${easing};
  }
  .lg-fadeup-exit-active {
    opacity: 0;
    transform: translateY(120px);
    transition: opacity ${animationDuration.long}ms ${easing}, transform ${animationDuration.long}ms ${easing};
  }
  .hero-text-fadeup-enter {
    opacity: 0;
    transform: translateY(120px);
    transition: opacity ${animationDuration.short}ms ${easing}, transform ${animationDuration.short}ms ${easing};
  }
  .hero-text-fadeup-enter-active {
    opacity: 0.7;
    transform: translateY(-40px);
    transition: opacity ${animationDuration.short}ms ${easing}, transform ${animationDuration.short}ms ${easing};
  }
  .hero-text-fadeup-enter-done {
    opacity: 0.7;
    transform: translateY(-40px);
  }
  .hero-text-fadeup-exit {
    opacity: 0.7;
    transform: translateY(-40px);
  }
  .hero-text-fadeup-exit-active {
    opacity: 0;
    transform: translateY(120px);
    transition: opacity ${animationDuration.short}ms ${easing}, transform ${animationDuration.short}ms ${easing};
  }
  
`

export default GlobalStyle
