// src/components/blog-post-layout.js
import React from "react"
import Helmet from "react-helmet"
import { Box, Heading, Text } from "rebass"
import styled from "styled-components"
import { space, background, backgroundColor } from "styled-system"

const StyledLi = styled.li`
  display: inline-block;
  ${space}
  ${backgroundColor}
  ${background}
`

export { Box, Heading, StyledLi, Text }
