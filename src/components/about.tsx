import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
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
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
  li {
    padding: 5px 0;
    letter-spacing: 0.1em;
  }
  li::before {
    content: '▹';
    color: ${colors.green};
    font-size: ${fontSizes.small};
    width: 16px;
    padding-right: 1em;
  }
  font-size: ${fontSizes.xsmall};
  font-family: ${fonts.SFMono};
`

export const About: React.FC = React.memo(() => {
  const data = useStaticQuery(graphql`
    query {
      mdx(slug: { eq: "about" }) {
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
    }
  `)
  const {
    mdx: {
      body,
      frontmatter: {
        skills,
        title,
        featuredImage: {
          childImageSharp: { fluid }
        }
      }
    }
  } = data

  const ref = React.useRef(null)
  const isOn = useOnScreen(ref)

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
})
