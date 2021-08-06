import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { theme } from '../styles'

const { colors } = theme

const Container = styled.div`
  width: 325px;
  height: 325px;
`

const ImgInnerWrapper = styled.div`
  max-width: 300px;
  position: relative;
  z-index: 2;
  .gatsby-image-wrapper {
    z-index: 2;
  }
`

const CoolLines = styled.div`
  border: 1px solid ${colors.green};
  width: 300px;
  height: 300px;
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 1;
`

export const CyberImage = ({ fluid }) => {
  return (
    <Container>
      <ImgInnerWrapper>
        <Img fluid={fluid} />
        <CoolLines></CoolLines>
      </ImgInnerWrapper>
    </Container>
  )
}
