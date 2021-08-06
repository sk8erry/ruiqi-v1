import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../styles'

const { colors } = theme

interface IPROPS {
  children: React.ReactNode
}

const Container = styled.div`
  display: flex;
  align-items: center;
  h2 {
    color: ${colors.lightestSlate};
  }
  div {
    border-top: 1px solid ${colors.green};
    flex: 1;
    margin-left: 2rem;
  }
`

export const SectionTitle: React.FC<IPROPS> = ({ children }) => {
  return (
    <Container>
      <h2>{children}</h2>
      <div></div>
    </Container>
  )
}
