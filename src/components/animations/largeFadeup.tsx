import * as React from 'react'
import { CSSTransition } from 'react-transition-group'

interface IPROPS {
  children: React.ReactNode
  in: boolean
}

export const LargeFadeUp: React.FC<IPROPS> = (props) => {
  const transitionProps = {
    ...props,
    unmountOnExit: true,
    timeout: 1500,
    classNames: 'lg-fadeup'
  }
  return <CSSTransition {...transitionProps}></CSSTransition>
}
