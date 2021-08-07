import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { useOnScreen } from '../hooks'
import { mixins, theme } from '../styles'
import { CyberImage } from './cyberImage'
import { SectionTitle } from './sectionTitle'
import Img from 'gatsby-image'

const { fonts, fontSizes } = theme

interface Work {
  body: string
  slug: string
  frontmatter: {
    company: string
    date: string
    location: string
    range: string
    title: string
    url: string
    type: string
    featuredImage?: {
      childImageSharp: {
        fluid: any
      }
    }
    techList?: string[]
  }
}

const Container = styled.div``

const WorkTitle = styled.div`
  a {
    ${mixins.inlineLink}
    font-family: ${fonts.Calibre};
  }
`

const WorkSubtitle = styled.div`
  padding: 5px 0;
  font-size: ${fontSizes.small};
`

const WorkContent = styled.div`
  ul {
    ${mixins.arrowList}
    font-size: ${fontSizes.medium};
  }
`

const WorkEntryContainer = styled.div``

const WorkGrid = styled.div`
  display: grid;
  gap: 60px;
`

const TechListContainer = styled.ul`
  display: flex;
  margin: 0;
  padding: 20px 0 0 0;
  li {
    list-style-type: none;
    font-family: ${fonts.SFMono} !important;
    font-size: ${fontSizes.small};
    color: ${theme.colors.green};
    margin: 0 7px;
    &:first-child {
      margin: 0 7px 0 0;
    }
    &:last-child {
      margin: 0 0 0 7px;
    }
    background: ${theme.colors.highlight};
    border-radius: 15px;
    padding: 5px 15px;
  }
`

export const Work: React.FC<any> = ({ work }) => {
  const { nodes } = work

  const ref = useRef(null)
  const isOnScreen = useOnScreen(ref)

  return (
    <Container ref={ref}>
      <SectionTitle>Work</SectionTitle>
      <WorkGrid>
        {nodes.map((node: Work) => {
          const {
            slug,
            body,
            frontmatter: { company, date, location, range, title, url, type, featuredImage, techList }
          } = node
          return (
            <WorkEntryContainer key={slug}>
              <WorkTitle>
                {title}{' '}
                <a href={url} target="_blank">
                  @ {company}
                </a>
              </WorkTitle>
              <WorkSubtitle>
                {type}, {range}
              </WorkSubtitle>
              <WorkContent>
                <MDXRenderer>{body}</MDXRenderer>
              </WorkContent>
              {techList?.length > 0 && (
                <TechListContainer>
                  {techList.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </TechListContainer>
              )}
              {featuredImage && <Img fluid={featuredImage.childImageSharp.fluid} />}
            </WorkEntryContainer>
          )
        })}
      </WorkGrid>
    </Container>
  )
}
