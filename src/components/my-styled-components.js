// src/components/blog-post-layout.js
import React from "react"
import {
  Box as BoxBase,
  Flex as FlexBase,
  Heading,
  Text as TextBase,
} from "rebass"
import { Link as LinkBase } from "gatsby"
import styled from "styled-components"
import {
  background,
  borders,
  boxShadow,
  color,
  maxWidth,
  minHeight,
  position,
  space,
  zIndex,
} from "styled-system"

export const HR = styled.hr`
  background-size: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
  background-color: rgba(0, 0, 0, 0.05);
  border-width: 100%;
  border-style: solid;
  ${color}
  ${space}
`

export const Box = styled(BoxBase)`
  ${borders}
`

export const DropBase = styled(BoxBase)`
  /* height: "50px"; */
  border-bottom: ${props => {
    return props.navbar === "isOpen" ? "1px inset" : 0
  }};
  height: 10px;
  background-color: "#07c";
  height: 50px;
  /* display: none; */

  /* @media (min-width: 768px) {
    display: none;
  } */
`

export const LayoutFlex = styled(FlexBase)`
  ${maxWidth}
  ${borders}
`

export const Flex960 = props => {
  return <LayoutFlex {...props} />
}

export const StyledLi = styled.li`
  display: inline-block;
  ${space}
  ${background}
`

export const Link = styled(LinkBase)`
  ${color}
  ${space}
  text-decoration: none;
  color: white;
`

export const FixedFlex = styled(FlexBase)`
${borders}
  ${boxShadow}
  ${position}
  ${minHeight}
  ${zIndex}
`

export const Flex = styled(FlexBase)`
  ${borders}
  ${maxWidth}
`

export const HiddenFlex = styled(FlexBase)`
  @media (max-width: 768px) {
    display: none;
  }
`

export const Text = styled(TextBase)`
  ${space}
  ${boxShadow}
`

export const TextDrop = styled(TextBase)`
  ${space}
  ${boxShadow}
  &:hover {
    background-color: ${props => {
      return "yellow"
    }};
    // border-bottom: 1px goldenrod solid;
  }
`

// only `pass-through` (unaltered) components
// are exported below
export { Heading }
