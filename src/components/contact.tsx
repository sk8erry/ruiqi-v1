import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import styled from 'styled-components'
import { useOnScreen } from '../hooks'
import { media, mixins, theme } from '../styles'
import { Fadeup } from './animations'
import { SectionTitle } from './sectionTitle'

interface IPROPS {
  contact: {
    body: string
  }
}

const Container = styled.div``

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 75px 0;
  ${media.tablet`padding: 60px 0;`};
`

const ContentContainer = styled.div`
  padding: 18px 0;
  ${mixins.fadeupReady}
`

const EmailLink = styled.a`
  ${mixins.bigButton};
`

export const Contact: React.FC<IPROPS> = ({ contact }) => {
  const ref = React.useRef(null)
  const isOnScreen = useOnScreen(ref)
  return (
    <Container ref={ref}>
      <SectionTitle trigger={isOnScreen}>Get In Touch</SectionTitle>
      <Fadeup in={isOnScreen}>
        <ContentContainer>
          <MDXRenderer>{contact.body}</MDXRenderer>
          <ButtonContainer>
            <EmailLink href={`mailto:${'hi@ruiqi.dev'}`} target="_blank">
              Say Hi
            </EmailLink>
          </ButtonContainer>
        </ContentContainer>
      </Fadeup>
    </Container>
  )
}
