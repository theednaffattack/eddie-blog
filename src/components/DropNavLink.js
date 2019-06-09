import React from "react"
import { Link as GatsbyLink } from "gatsby"
import posed from "react-pose"
import styled from "styled-components"
import { boxShadow, space } from "styled-system"

const LinkBase = styled(GatsbyLink)`
  ${space}
  ${boxShadow}
  border-top: 1px white inset;
  border-bottom: 2px transparent inset;
  text-decoration: none;
  display: ${props => (props.navbar === "isOpen" ? "block" : "none")};
  cursor: pointer;

  &:hover {
    background-color: yellow;
  }
`

const Link = posed(LinkBase)({
  isOpen: {
    y: 0,
    opacity: 1,
    applyAtStart: { display: "block" },
    staggerChildren: 20,
  },
  isClosed: { y: -10, opacity: 0, applyAtEnd: { display: "none" } },
})

export const DropNavLink = ({
  label,
  handleNavLinkClick,
  children,
  link,
  navbar,
  poseProps,
}) => {
  return (
    <Link
      onClick={handleNavLinkClick}
      pose={poseProps ? poseProps : "isClosed"}
      color="white"
      to={link}
      id={link}
      // activeStyle={{ color: "crimson" }}
      // partiallyActive={true}
    >
      {children}
    </Link>
  )
}
