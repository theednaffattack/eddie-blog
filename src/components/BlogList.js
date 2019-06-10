// BlogList.js
import React from "react"
import { Link } from "gatsby"
import format from "date-fns/format"

import { Box, Flex, Heading, HR, Text } from "./my-styled-components"

export function BlogList({ group }) {
  return group.map(({ node }) => {
    const { title, author, date } = node.frontmatter
    return (
      <Flex flexDirection="column" key={node.id}>
        <header>
          <Text my={2} fontSize="1.2em" as="h2">
            {title}
          </Text>
          <Flex>
            <Text fontWeight="bold">Date: &nbsp;</Text>
            <Text as="time"> {format(new Date(date), "YYYY-MM-DD")}</Text>
          </Flex>
        </header>
        <Text my={3}>{node.excerpt}</Text>
        <Link to={node.fields.slug}>
          <Text fontWeight="bold">View Article</Text>
        </Link>
        <HR my={3} mx={0} />
      </Flex>
    )
  })
}
