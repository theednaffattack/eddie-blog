import React from "react"
import styled from "styled-components"

const MenuIconCss = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${props => props.bg};
  text-align: center;
  margin: 6px auto 0 auto;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const MenuIcon = ({ bg }) => (
  <>
    {[1, 2, 3].map(x => (
      <MenuIconCss bg={bg} key={x} />
    ))}
  </>
)
