import { Link as GatsbyLink } from "gatsby"
import React from "react"
import posed from "react-pose"
import { Text } from "rebass"
import styled from "styled-components"
import { boxShadow, color, space } from "styled-system"

const LinkBase = styled(GatsbyLink)`
  ${space}
  ${boxShadow}
  ${color}
//   border-top: 1px white inset;
//   border-bottom: 2px transparent inset;

  text-decoration: none;
//   display: ${props => (props.navbar !== "isOpen" ? "block" : "none")};
  cursor: pointer;
  // &:hover {
  //   border-bottom: 2px goldenrod solid;
  // }
`

const Link = posed(LinkBase)({
  isOpen: { y: -10, opacity: 1 },
  isClosed: { y: 0, opacity: 0 },
})

export const HorizontalNavLink = ({
  label,
  activeFn,
  children,
  link,
  poseProps,
}) => (
  <Text fontSize={[2, 3, 3]} color="white" mx={3}>
    <Link
      color="white"
      to={link}
      id={link}
      onClick={activeFn}
      navbar={poseProps}
      pose={poseProps}
      activeStyle={{ color: "crimson" }}
      partiallyActive={true}
    >
      {children}
    </Link>
  </Text>
)
