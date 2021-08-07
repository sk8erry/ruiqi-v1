import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { theme, mixins } from '../styles'
import styled from 'styled-components'

interface IPROPS {
  pageTitle: string
  children: React.ReactNode
}

const Container = styled.div`
  ${mixins.sidePadding};
  background-color: ${theme.colors.navy};
`

export const Layout: React.FC<IPROPS> = ({ pageTitle, children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Container>
      {/* <title>
        {pageTitle} | {data?.site?.siteMetadata?.title}
      </title> */}
      {children}
    </Container>
  )
}
