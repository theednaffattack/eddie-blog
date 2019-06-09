import React from "react"
import styled from "styled-components"

import { Button as ButtonBase } from "rebass"

import { MenuIcon } from "./MenuIcon"

const Button = styled(ButtonBase)`
  display: none;
  height: auto;
  border: ${props =>
    props.isOpen
      ? "1px rgba(255, 255, 255, 1) solid"
      : "1px rgba(255, 255, 255, 0.5) solid"};
  background-color: ${props => props.bg};

  @media (max-width: 768px) {
    display: block;
    padding: 4px 8px 10px 8px;
  }
`

export const MenuButton = ({ bg, handleNavToggle, isOpen }) => {
  return (
    <>
      <Button type="button" bg={bg} isOpen={isOpen} onClick={handleNavToggle}>
        <MenuIcon bg="#fff" />
      </Button>
    </>
  )
}
