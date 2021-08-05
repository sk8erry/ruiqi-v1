import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

interface IPROPS {
  children: React.ReactNode
  in: boolean
}

const Container = styled.div``

export const Fadedown: React.FC<IPROPS> = (props) => {
  const transitionProps = {
    ...props,
    unmountOnExit: true,
    timeout: 1500,
    classNames: 'fadedown'
  }
  return <CSSTransition {...transitionProps}></CSSTransition>
}
