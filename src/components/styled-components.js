// src/components/blog-post-layout.js

import { Box as BoxBase, Flex as FlexBase, Heading, Text } from "rebass"
import styled from "styled-components"
import { space, background, borders } from "styled-system"

const StyledLi = styled.li`
  display: inline-block;
  ${space}
  ${background}
`

const Box = styled(BoxBase)`
  ${borders}
`

const Flex = styled(FlexBase)`
  ${borders}
`

export { Box, Flex, Heading, StyledLi, Text }
