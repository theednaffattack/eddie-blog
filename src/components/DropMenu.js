import React from "react"

import { Box as BoxBase } from "rebass"
import posed from "react-pose"
import styled from "styled-components"

const DropBase = styled(BoxBase)`
  /* height: "50px"; */
  border-bottom: ${props => {
    return props.navbar === "isOpen" ? "1px inset" : 0
  }};
  height: 50px;
  background-color: "#07c";
  /* display: none; */

  /* @media (max-width: 768px) {
    display: block;
  } */
`

// border-bottom: 0;
// height: 50px;
// display: none;

const Drop = posed(DropBase)({
  isOpen: {
    applyAtStart: { display: "block" },
    height: "auto",
    // y: 0,
    // opacity: 1,
    delayChildren: 100,
    staggerChildren: 20,
  },
  isClosed: {
    applyAtStart: { display: "none" },
    height: 0,
    // y: -150,
    // opacity: 0,
    delay: 300,
  },
})

export const DropMenu = props => {
  console.log("DropMenu props")
  console.log(props)
  return (
    <Drop id="inner-drop-menu" width={1} pose={props.pose}>
      {props.children}
    </Drop>
  )
}
