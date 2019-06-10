// src/components/browse-blog-posts.js
import React from "react"
import { Link } from "gatsby"
import LayoutContainer from "./LayoutContainer"
import { Flex, Heading, Text } from "./my-styled-components"
import { BlogList } from "./BlogList"
import { BlogListFooter } from "./BlogListFooter"

function BrowseBlogPosts({ pageContext }) {
  const { groupedPosts, group } = pageContext
  return (
    <LayoutContainer>
      <Flex
        color="text"
        width={1}
        alignItems="center"
        bg="#eee"
        flexDirection="column"
      >
        <Flex width={1} maxWidth={960} flexDirection="column">
          <Heading my={3}>Blogs</Heading>
          <BlogList group={group} />
          <BlogListFooter groupedPosts={groupedPosts} />
        </Flex>
      </Flex>
    </LayoutContainer>
  )
}

export default BrowseBlogPosts
