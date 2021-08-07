import { useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import styled from 'styled-components'
import { useOnScreen } from '../hooks'
import { theme, mixins, media } from '../styles'
import { CyberImage } from './cyberImage'
import { SectionTitle } from './sectionTitle'

const { colors, fontSizes, fonts } = theme

const Container = styled.div`
  a {
    ${mixins.inlineLink};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  ${media.tablet`display: flex;flex-direction: column-reverse;`};
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  font-family: ${theme.fonts.SFMono};
  ${mixins.arrowList};
  li {
    letter-spacing: 0.1em;
  }
`

export const About: React.FC<any> = ({ about }) => {
  const {
    body,
    frontmatter: {
      skills,
      title,
      featuredImage: {
        childImageSharp: { fluid }
      }
    }
  } = about

  const ref = React.useRef(null)
  const isInView = useOnScreen(ref)

  return (
    <Container ref={ref}>
      <SectionTitle>{title}</SectionTitle>
      <Grid>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
          <UnorderedList>
            {skills.map((skill: string, i: number) => (
              <li key={i}>{skill}</li>
            ))}
          </UnorderedList>
        </div>
        <ImgWrapper>
          <CyberImage fluid={fluid}></CyberImage>
        </ImgWrapper>
      </Grid>
    </Container>
  )
}
