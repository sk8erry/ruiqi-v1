import * as React from 'react'
import { Landing, Layout, Work, About, Section, Email } from '../components'
import { Fadeup } from '../components/animations'
import { GlobalStyle } from '../styles'
import { isMobile } from 'react-device-detect'
import { graphql } from 'gatsby'

const IndexPage = ({ data: { about, work } }) => {
  console.log(about)
  const [isMounted, setIsMounted] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => setIsMounted(true), 100)
  }, [])
  const pageTitle = 'Ruiqi Yang'
  const aboutSectionRef = React.useRef(null)
  const workSectionRef = React.useRef(null)
  const handleScroll = () =>
    setTimeout(() => aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' }), isMobile ? 300 : 0)
  return (
    <>
      <GlobalStyle />
      <Layout pageTitle={pageTitle}>
        <Fadeup in={isMounted}>
          <Email></Email>
        </Fadeup>
        <Landing handleScroll={handleScroll}></Landing>
        <Section ref={aboutSectionRef}>
          <About about={about}></About>
        </Section>
        <Section ref={workSectionRef}>
          <Work work={work}></Work>
        </Section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    about: mdx(slug: { eq: "about/about" }) {
      body
      frontmatter {
        skills
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    work: allMdx(filter: { slug: { regex: "/works/" } }, sort: { fields: frontmatter___order, order: ASC }) {
      nodes {
        body
        slug
        frontmatter {
          company
          date
          title
          url
          location
          range
          type
          techList
        }
      }
    }
  }
`

export default IndexPage
