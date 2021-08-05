import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { theme } from '../styles'
import styled from 'styled-components'
import mixins from '../styles/mixin'

const Container = styled.div`
  ${mixins.sidePadding};
  background-color: ${theme.colors.navy};
`

export const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <title>
        {pageTitle} | {data?.site?.siteMetadata?.title}
      </title>
      <main>{children}</main>
    </Container>
  )
}
