import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GlobalStyle } from '../styles'
import styled from 'styled-components'
import mixins from '../styles/mixin'
import { Triangle } from './icons/triangle'

const Container = styled.div`
  ${mixins.sidePadding};
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
  padding: 1rem;
`

const Heading = styled.h1`
  color: rebeccapurple;
`

const SiteTitle = styled.div`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
`

const Layout = ({ pageTitle, children }) => {
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
      <GlobalStyle />
      <title>
        {pageTitle} | {data?.site?.siteMetadata?.title}
      </title>
      <SiteTitle>{data?.site?.siteMetadata?.title}</SiteTitle>
      <Triangle></Triangle>
      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about" className="nav-link-text">
              About
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/blogs" className="nav-link-text">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  )
}

export default Layout
