import * as React from 'react'
import styled from 'styled-components'
import { useOnScreen } from '../hooks'
import { mixins, theme } from '../styles'
import { Fadedown, FadeLeft, FadeRight } from './animations'

const { colors, fontSizes } = theme

interface IPROPS {
  children: React.ReactNode
  animationDelay?: number
  trigger?: boolean
}

const Container = styled.div`
  display: flex;
  align-items: center;
  h2 {
    color: ${colors.lightestSlate};
  }
  h1 {
    font-size: ${fontSizes.h3};
  }
  div {
    border-top: 1px solid ${colors.green};
    flex: 1;
    margin-left: 2rem;
  }
`

const H1 = styled.h1`
  ${mixins.faderightReady}
`

const Decorator = styled.div`
  ${mixins.fadeleftReady}
`

export const SectionTitle: React.FC<IPROPS> = ({ children, animationDelay, trigger }) => {
  return (
    <Container>
      <FadeRight in={trigger}>
        <H1 style={{ transitionDelay: `${animationDelay ?? '0'}ms` }}>{children}</H1>
      </FadeRight>
      <FadeLeft in={trigger}>
        <Decorator style={{ transitionDelay: `${animationDelay ?? '0'}ms` }}></Decorator>
      </FadeLeft>
    </Container>
  )
}
