import * as React from 'react'
import { Landing, Layout, Work, About, Section, Email, Contact, Footer, Head } from '../components'
import { Fadeup } from '../components/animations'
import { GlobalStyle } from '../styles'
import { isMobile } from 'react-device-detect'
import { graphql } from 'gatsby'

const IndexPage = ({ data: { about, work, contact } }) => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setIsMounted(true), 100)
  }, [])

  const pageTitle = 'Ruiqi Yang'

  const aboutSectionRef = React.useRef(null)
  const workSectionRef = React.useRef(null)
  const contactSectionReft = React.useRef(null)

  const handleScroll = (sectionName: string) => {
    let currentRef: React.MutableRefObject<HTMLDivElement>
    if (sectionName === 'About') {
      currentRef = aboutSectionRef
    }
    if (sectionName === 'Work') {
      currentRef = workSectionRef
    }
    if (sectionName === 'Contact') {
      currentRef = contactSectionReft
    }
    setTimeout(() => currentRef.current.scrollIntoView({ behavior: 'smooth' }), isMobile ? 300 : 0)
  }

  return (
    <>
      <Head></Head>
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
        <Section ref={contactSectionReft}>
          <Contact contact={contact}></Contact>
        </Section>
        <Footer></Footer>
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
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    contact: mdx(slug: { eq: "contact/contact" }) {
      body
    }
  }
`

export default IndexPage
