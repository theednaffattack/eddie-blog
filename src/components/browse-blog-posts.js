// src/components/browse-blog-posts.js
import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import LayoutContainer from "./LayoutContainer"

function BrowseBlogPosts({ pageContext }) {
  const { groupedPosts, group } = pageContext
  return (
    <LayoutContainer>
      {group.map(({ node }) => {
        const { title, author, date } = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <div>{title}</div>
              <div>Posting By {author}</div>
              <div>{date}</div>
            </header>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>View Article</Link>
            <hr />
          </div>
        )
      })}
      <footer>
        Pages:{" "}
        {groupedPosts.map((x, index) => {
          const currentPage = index + 1
          return (
            <React.Fragment key={index}>
              <Link
                key={index}
                to={`/blog/${currentPage}`}
                activeStyle={{ color: "crimson" }}
              >
                {index + 1}
              </Link>{" "}
            </React.Fragment>
          )
        })}
      </footer>
    </LayoutContainer>
  )
}

export default BrowseBlogPosts
