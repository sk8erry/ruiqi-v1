import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { createGlobalStyle } from 'styled-components'
import { theme } from '../../styles'

const { animationDuration, easing } = theme

interface IPROPS {
  children: React.ReactNode
  in: boolean
}

const animationName = 'lg-fadeup'

const AnimationStyle = createGlobalStyle`
  &.${animationName}-enter {
    opacity: 0;
    transform: translateY(120px);
    transition: opacity ${animationDuration.long}ms ${easing}, transform ${animationDuration.long}ms ${easing};
  }
  &.${animationName}-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity ${animationDuration.long}ms ${easing}, transform ${animationDuration.long}ms ${easing};
  }
  &.${animationName}-exit-active {
    opacity: 0;
    transform: translateY(120px);
    transition: opacity ${animationDuration.long}ms ${easing}, transform ${animationDuration.long}ms ${easing};
  }
`

export const LargeFadeUp: React.FC<IPROPS> = (props) => {
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
