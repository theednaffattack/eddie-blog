import React from "react"
import { Flex as FlexBase } from "rebass"
import styled from "styled-components"
import { borders, boxShadow, minHeight, position, zIndex } from "styled-system"

import FullDropMenu from "./FullDropMenu"
import HorizontalMenu from "./HorizontalMenu"

const FixedFlex = styled(FlexBase)`
${borders}
  ${boxShadow}
  ${position}
  ${minHeight}
  ${zIndex}
`

const Header = ({
  activeFn,
  handleNavToggle,
  navBarState,
  navSize,
  siteTitle,
  theme,
}) => {
  return (
    <FixedFlex
      zIndex="9999"
      flexDirection="column"
      alignItems="center"
      bg={theme.colors.blue}
      position="fixed"
      width={[1]}
    >
      <HorizontalMenu
        handleNavToggle={handleNavToggle}
        handleNavLinkClick={activeFn}
        activeFn={activeFn}
        navSize={navSize}
        siteTitle={siteTitle}
      />
      <FullDropMenu
        activeFn={activeFn}
        handleNavToggle={handleNavToggle}
        handleNavLinkClick={activeFn}
        navBarState={navBarState}
      />
    </FixedFlex>
  )
}

export default Header
