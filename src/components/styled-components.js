// src/components/blog-post-layout.js

import { Box as BoxBase, Flex as FlexBase, Heading, Text } from "rebass"
import styled from "styled-components"
import { background, borders, maxWidth, space } from "styled-system"

export const Box = styled(BoxBase)`
  ${borders}
`

export const Flex = styled(FlexBase)`
  ${borders}
`

export const LayoutFlex = styled(FlexBase)`
  ${maxWidth}
`

export const StyledLi = styled.li`
  display: inline-block;
  ${space}
  ${background}
`

// only `pass-through` (unaltered) components
// are exported below
export { Heading }
