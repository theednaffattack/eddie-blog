// src/components/browse-blog-posts.js
import React from "react"
import { Link } from "gatsby"

export function BlogListFooter({ groupedPosts }) {
  return (
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
  )
}
