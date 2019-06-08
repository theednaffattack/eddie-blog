import React from "react"
import { Box } from "rebass"

import { StyledLi } from "./styled-components"

const DisplayTags = ({ tags }) => {
  let readyTags = []
  const empty = ""
  tags && tags.length
    ? (readyTags = tags.split(" ").map((item, index) => (
        <StyledLi px={2} bg={index % 2 ? "green" : "#eee"} key={`tag-${index}`}>
          <Box bg={index % 2 ? "pink" : "yellow"}>{item}</Box>
        </StyledLi>
      )))
    : (readyTags = [...empty])
  return readyTags
}

export default DisplayTags
