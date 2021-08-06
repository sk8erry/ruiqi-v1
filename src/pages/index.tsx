import * as React from 'react'
import { Landing, Layout, Work, About, Section, Email } from '../components'
import { Fadeup } from '../components/animations'
import { GlobalStyle } from '../styles'

const IndexPage = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  React.useEffect(() => {
    setTimeout(() => setIsMounted(true), 100)
  }, [])
  const pageTitle = 'Ruiqi Yang'
  const aboutSectionRef = React.useRef(null)
  const workSectionRef = React.useRef(null)
  const handleScroll = () => setTimeout(() => aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' }), 300)
  return (
    <>
      <GlobalStyle />
      <Layout pageTitle={pageTitle}>
        <Fadeup in={isMounted}>
          <Email></Email>
        </Fadeup>
        <Landing handleScroll={handleScroll}></Landing>
        <Section ref={aboutSectionRef}>
          <About></About>
        </Section>
        <Section ref={workSectionRef}>
          <Work></Work>
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage
