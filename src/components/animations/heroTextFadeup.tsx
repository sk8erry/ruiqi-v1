import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { createGlobalStyle } from 'styled-components'
import { theme } from '../../styles'

const { animationDuration, easing } = theme

interface IPROPS {
  children: React.ReactNode
  in: boolean
}

const animationName = 'hero-text-fadeup'

const AnimationStyle = createGlobalStyle`
  &.${animationName}-enter {
    opacity: 0;
    transform: translateY(120px);
    transition: opacity ${animationDuration.short}ms ${easing}, transform ${animationDuration.short}ms ${easing};
  }
  &.${animationName}-enter-active {
    opacity: 0.7;
    transform: translateY(20px);
    transition: opacity ${animationDuration.short}ms ${easing}, transform ${animationDuration.short}ms ${easing};
  }
  &.${animationName}-enter-done {
    opacity: 0.7;
    transform: translateY(20px);
  }
  &.${animationName}-exit {
    opacity: 0.7;
    transform: translateY(20px);
  }
  &.${animationName}-exit-active {
    opacity: 0;
    transform: translateY(120px);
    transition: opacity ${animationDuration.short}ms ${easing}, transform ${animationDuration.short}ms ${easing};
  }
`

export const HeroTextFadeup: React.FC<IPROPS> = (props) => {
  const transitionProps = {
    ...props,
    unmountOnExit: true,
    timeout: 1500,
    classNames: animationName
  }
  return (
    <>
      <AnimationStyle />
      <CSSTransition {...transitionProps}></CSSTransition>
    </>
  )
}
