import React from "react"
import { Link as LinkBase } from "gatsby"
import { Flex as FlexBase, Text as TextBase } from "rebass"
import { borders, boxShadow, color, maxWidth, space } from "styled-system"
import styled from "styled-components"

import { MenuButton } from "./MenuButton"
import { MenuIcon } from "./MenuIcon"
import { HorizontalNavLink } from "./HorizontalNavLink"
import theme from "../styles/theme"

const Link = styled(LinkBase)`
  ${color}
  ${space}
  text-decoration: none;
  color: white;
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

const Text = styled(TextBase)`
  ${space}
  ${boxShadow}
`

function HorizontalMenu({
  activeFn,
  handleNavToggle,
  navBarState,
  navSize,
  siteTitle,
}) {
  return (
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
  )
}

export default HorizontalMenu
