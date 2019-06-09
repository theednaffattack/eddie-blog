import React, { Component } from "react"
import { Link as LinkBase } from "gatsby"
import { Box as BoxBase, Flex as FlexBase, Text as TextBase } from "rebass"
import styled from "styled-components"
import {
  borders,
  boxShadow,
  color,
  maxWidth,
  minHeight,
  position,
  space,
  zIndex,
} from "styled-system"

import { MenuButton } from "./MenuButton"
import { MenuIcon } from "./MenuIcon"
import { DropNavLink } from "./DropNavLink"
import { HorizontalNavLink } from "./HorizontalNavLink"

import { DropMenu } from "./DropMenu"

const Link = styled(LinkBase)`
  ${color}
  ${space}
  text-decoration: none;
  color: white;
`

const FixedFlex = styled(FlexBase)`
${borders}
  ${boxShadow}
  ${position}
  ${minHeight}
  ${zIndex}
`

const Flex = styled(FlexBase)`
  ${borders}
  ${maxWidth}
`

const HiddenFlex = styled(FlexBase)`
  @media (max-width: 768px) {
    display: none;
  }
`

const Box = styled(BoxBase)`
  ${borders}
`

const Text = styled(TextBase)`
  ${space}
  ${boxShadow}
`

const TextDrop = styled(TextBase)`
  ${space}
  ${boxShadow}
  &:hover {
    background-color: ${props => {
      return "yellow"
    }};
    // border-bottom: 1px goldenrod solid;
  }
`

// const DropBase = styled(BoxBase)`
//   height: "50px";
//   border-bottom: ${props => {
//     return props.navbar === "isOpen" ? "1px inset" : 0
//   }};
//   background-color: "#07c";
// `

// border-bottom: 0;
// height: 50px;
// display: none;

// @media (max-width: 768px) {
//   display: block;
// }

// const Drop = posed(DropBase)({
//   isOpen: {
//     height: "auto",
//     // y: 0,
//     // opacity: 1,
//     delayChildren: 100,
//     staggerChildren: 20,
//   },
//   isClosed: {
//     height: 0,
//     // y: -150,
//     // opacity: 0,
//     delay: 300,
//   },
// })

const Header = ({
  navSize,
  activeFn,
  navBarState,
  handleNavToggle,
  siteTitle,
  theme,
}) => {
  // let {
  //   navSize,
  //   activeFn,
  //   navBarState,
  //   handleNavToggle,
  //   siteTitle,
  //   theme,
  // } = this.props
  return (
    <FixedFlex
      zIndex="9999"
      flexDirection="column"
      alignItems="center"
      bg={theme.colors.blue}
      position="fixed"
      width={[1]}
    >
      <Flex
        minHeight={navSize}
        width={1}
        bg={theme.colors.blue}
        flexDirection="row"
        alignItems="center"
        maxWidth={960}
        p={3}
      >
        {/* <Box width="75px"> */}
        <MenuButton
          bg={theme.colors.blue}
          isOpen={navBarState === "isOpen" ? true : false}
          handleNavToggle={handleNavToggle}
        >
          <MenuIcon />
        </MenuButton>

        <Flex
          flexDirection="column"
          alignItems="center"
          mr="auto"
          width={[1, 1 / 5]}
        >
          <Text
            ml={["-30px", 0]}
            color="white"
            fontWeight="700"
            fontSize={[4, 4, 4]}
          >
            <Link
              color="white"
              to="/"
              // style={{
              //   color: `white`,
              //   textDecoration: `none`,
              // }}
            >
              {siteTitle}
            </Link>
          </Text>
        </Flex>
        <HiddenFlex>
          <HorizontalNavLink link="/#projects" activeFn={activeFn}>
            projects
          </HorizontalNavLink>
          <HorizontalNavLink link="/#experience" activeFn={activeFn}>
            experience
          </HorizontalNavLink>
          <HorizontalNavLink link="/blog/1" activeFn={activeFn}>
            blog
          </HorizontalNavLink>
          <HorizontalNavLink link="/#contact" activeFn={activeFn}>
            contact
          </HorizontalNavLink>
        </HiddenFlex>
      </Flex>

      <DropMenu width={1} pose={navBarState}>
        <Box value="#projects" bg="#004d84">
          <DropNavLink
            link="/#projects"
            handleNavLinkClick={activeFn}
            navbar={navBarState}
            poseProps={navBarState}
          >
            <TextDrop
              pl={3}
              py={2}
              id="/#projects"
              color="white"
              navbar={navBarState}
              fontSize={[3, 4]}
            >
              projects
            </TextDrop>
          </DropNavLink>
        </Box>
        <Box bg="#004d84">
          <DropNavLink
            link="/blog/1"
            handleNavLinkClick={activeFn}
            navbar={navBarState}
            poseProps={navBarState}
          >
            <TextDrop
              pl={3}
              py={2}
              id="/blog/1"
              color="white"
              navBar={navBarState}
              fontSize={[3, 4]}
            >
              blog
            </TextDrop>
          </DropNavLink>
        </Box>
        <Box bg="#004d84">
          <DropNavLink
            link="/#contact"
            handleNavLinkClick={activeFn}
            navbar={navBarState}
            poseProps={navBarState}
          >
            <TextDrop
              pl={3}
              py={2}
              id="/contact"
              color="white"
              navBar={navBarState}
              fontSize={[3, 4]}
            >
              contact
            </TextDrop>
          </DropNavLink>
        </Box>
      </DropMenu>
    </FixedFlex>
  )
}

export default Header
