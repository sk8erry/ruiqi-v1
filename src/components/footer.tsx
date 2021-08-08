import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../styles'

const { fonts, fontSizes } = theme

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xxmsall};
  padding: 30px;
`

export const Footer = () => {
  return <Container>{'Built with React, TypeScript, Styled Components & Gatsby. Hosted on Gatsby Cloud.'}</Container>
}
