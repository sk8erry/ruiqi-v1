import * as React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

interface Props {
  children: React.ReactNode
}

export const Container = styled.section`
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1000px;
  ${media.tablet`padding: 100px 0;`};
  ${media.phone`padding: 50px 0;`};
`

export const Section = React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return <Container ref={ref}>{children}</Container>
})
