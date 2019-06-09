import React from "react"
import posed from "react-pose"

import { DropBase } from "./my-styled-components"

const Drop = posed(DropBase)({
  isOpen: {
    // applyAtStart: { display: "block" },
    height: "auto",
    // y: 0,
    // opacity: 1,
    delayChildren: 100,
    staggerChildren: 20,
  },
  isClosed: {
    // applyAtEnd: { display: "none" },
    height: 0,
    // y: -150,
    // opacity: 0,
    delay: 300,
  },
})

export const DropMenu = props => {
  return (
    <Drop id="inner-drop-menu" width={1} pose={props.pose}>
      {props.children}
    </Drop>
  )
}
