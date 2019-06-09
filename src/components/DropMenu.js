import React from "react"

import { Box as BoxBase } from "rebass"
import posed from "react-pose"
import styled from "styled-components"

const DropBase = styled(BoxBase)`
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

// border-bottom: 0;
// height: 50px;
// display: none;

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
