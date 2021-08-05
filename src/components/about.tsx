import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'
import styled from 'styled-components'
import { theme } from '../styles'
import mixins from '../styles/mixin'

const { colors, fontSizes, fonts } = theme

const Container = styled.div`
  a {
    ${mixins.inlineLink};
  }
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

export const About = (props) => {
  const data = useStaticQuery(graphql`
    query {
      mdx(slug: { eq: "about" }) {
        body
        frontmatter {
          skills
          title
        }
      }
    }
  `)
  const {
    mdx: {
      body,
      frontmatter: { skills }
    }
  } = data
  console.log(data)
  return (
    <Container>
      <MDXRenderer>{body}</MDXRenderer>
      <UnorderedList>
        {skills.map((skill: string, i: number) => (
          <li key={i}>{skill}</li>
        ))}
      </UnorderedList>
    </Container>
  )
}
