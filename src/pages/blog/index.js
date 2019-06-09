// src/components/blog/index.js
import React from "react"
import { graphql, Link } from "gatsby"
import LayoutContainer from "../../components/LayoutContainer"

function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx
  return (
    <LayoutContainer>
      {posts.map(({ node }) => {
        const { title, author } = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <div>{title}</div>
              <div>Posting By {author}</div>
            </header>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>View Article</Link>
            <hr />
          </div>
        )
      })}
    </LayoutContainer>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
          }
        }
      }
    }
  }
`
