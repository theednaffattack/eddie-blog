import React from "react"

import { DropNavLink } from "./DropNavLink"
import { DropMenu } from "./DropMenu"
import { Box, TextDrop } from "./my-styled-components"

const textDrop = { fontSize: [3, 4], pl: 3, py: 2, color: "white" }

export const NavLinksMaster = [
  {
    uri: "/#projects",
    link: "/#projects",
    text: "projects",
  },
  {
    uri: "/#experience",
    link: "/#experience",
    text: "experience",
  },
  {
    uri: "/blog/1",
    link: "/blog/1",
    text: "blog",
  },
  {
    uri: "/#contact",
    link: "/#contact",
    text: "contact",
  },
]

function FullDropMenu({ activeFn, navBarState }) {
  return (
    <DropMenu width={1} pose={navBarState}>
      {NavLinksMaster.map((navLink, index) => {
        const { uri, link, text } = navLink
        return (
          <Box bg="#004d84">
            <DropNavLink
              link={link}
              handleNavLinkClick={activeFn}
              navbar={navBarState}
              poseProps={navBarState}
            >
              <TextDrop
                pl={textDrop.pl}
                py={textDrop.py}
                id={link}
                color={textDrop.color}
                navbar={navBarState}
                fontSize={textDrop.fontSize}
              >
                {text}
              </TextDrop>
            </DropNavLink>
          </Box>
        )
      })}
    </DropMenu>
  )
}

export default FullDropMenu
