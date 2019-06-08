// src/components/blog-post-layout.js
import React from "react"
import Helmet from "react-helmet"
import { Heading, Text } from "rebass"
import format from "date-fns/format"
import { MDXProvider } from "@mdx-js/react"

import CodeComponent from "./CodeBlock"

import Layout from "./layout"
import { Tagslist } from "./tags-list"

const components = {
  pre: props => <div {...props} />,
  code: CodeComponent,
}

function BlogPostLayout({ children, pageContext }) {
  const { title, author, date, tags } = pageContext.frontmatter

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        <header>
          <Heading as="h1">{title}</Heading>
          <Text>Author: {author}</Text>
          <Text as="time">
            Date: {format(new Date(date), "YYYY-MM-DD ddd")}
          </Text>
          <Tagslist tags={tags} />
        </header>
        <MDXProvider components={components}>{children}</MDXProvider>
      </article>
    </Layout>
  )
}

export default BlogPostLayout
