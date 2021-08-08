import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { createGlobalStyle } from 'styled-components'
import { theme } from '../../styles'

const { animationDuration, easing } = theme

interface IPROPS {
  children: React.ReactNode
  in: boolean
  timeout?: number
  classNames?: string
}

const animationName = 'faderight'

const AnimationStyle = createGlobalStyle`
  &.${animationName}-enter {
    opacity: 0;
    transform: translateX(-20px);
  }
  &.${animationName}-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity ${animationDuration.medium}ms ${easing}, transform ${animationDuration.medium}ms ${easing};
  }
  &.${animationName}-enter-done {
    opacity: 1;
    transform: translateX(0px);
  }
  &.${animationName}-exit-active {
    opacity: 0;
    transform: translateX(0px);
    transition: opacity ${animationDuration.medium}ms ${easing}, transform ${animationDuration.medium}ms ${easing};
  }
  &.${animationName}-exit-done {
    opacity: 0;
    transform: translateX(-20px);
  }
`

export const FadeRight: React.FC<IPROPS> = (props) => {
  const transitionProps = {
    timeout: 1500,
    classNames: animationName,
    ...props
  }
  return (
    <>
      <AnimationStyle />
      <CSSTransition {...transitionProps}></CSSTransition>
    </>
  )
}
