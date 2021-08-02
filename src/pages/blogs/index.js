import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'

const Blogs = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.edges.map(({ node }) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blogs/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
      <p>Blog goes here</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(filter: {}, sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            avatar
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          body
          slug
        }
      }
    }
  }
`

export default Blogs
