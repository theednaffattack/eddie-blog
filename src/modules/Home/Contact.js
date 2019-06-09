// src/modules/Home/Contact.js

import React, { Component } from "react"
import Scroll from "react-scroll-into-view-if-needed"
import IconBase from "react-geomicons"
import { withFormik } from "formik"

import {
  Box as BoxBase,
  Flex as FlexBase,
  Heading,
  Image as ImageBase,
  Text as TextBase,
} from "rebass"

import {
  background,
  borders,
  boxShadow,
  height,
  minHeight,
  position,
  space,
  width,
} from "styled-system"

import styled from "styled-components"

import { Form } from "./Form"

import github from "./images/github-omg.svg"
import linkedIn from "./images/iconmonstr-linkedin-3-omg.svg"

const Image = styled.img`
${space}
${height}
${width}
`

const A = styled.a`
  text-decoration: none;
`

const Flex = styled(FlexBase)`
  ${background}
    ${borders}
    ${boxShadow}
    ${position}
    ${minHeight}
  `
const Text = styled(TextBase)`
  ${space}
`

const Input = styled.input`
  ${borders}
  ${space}
  font-size: 1em;
`

const Textarea = styled.textarea`
  ${borders}
  ${space}
  font-size: 1em;
`

const Box = styled(BoxBase)`
  ${borders}
`

const Icon = styled(IconBase)`
  ${space}
`

export const Contact = ({ activeLink }) => (
  <Flex
    minHeight="20vh"
    flexDirection="column"
    // justifyContent="center"
    // alignItems="center"
    id="contact"
    bt="2px purple solid"
    bg="blue"
    color="white"
    py={4}
    px={[3, 5]}
    style={{
      borderTop: "1px #ccc solid",
    }}
    // ref={contactRef}
  >
    <Scroll
      active={activeLink === "contact" ? true : false}
      options={{ behavior: "smooth", scrollMode: "if-needed" }}
    >
      <Text mx="auto" fontSize={[4]} mb={4} width={[1 / 2]}>
        Contact Me
      </Text>
      <Flex
        mx="auto"
        width={[1 / 4]}
        justifyContent="center"
        flexDirection="row"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          mx={4}
          px={4}
          pb={4}
          width={[1, 1 / 2]}
        >
          <A href="https://www.linkedin.com/in/eddienaff/">
            <Image
              height={["50px", "80px"]}
              width={["50px", "80px"]}
              mb={3}
              ml={1}
              src={linkedIn}
              alt="Github Logo"
            />
            <Text fontSize={[2, 3]} color="white">
              LinkedIn
            </Text>
          </A>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          // justifyContent="center"
          mx={4}
          px={4}
          pb={4}
          width={[1, 1 / 2]}
        >
          <A href="https://github.com/theednaffattack">
            <Image
              height={["50px", "80px"]}
              width={["50px", "80px"]}
              mb={3}
              src={github}
              alt="Github Logo"
            />
            <Text fontSize={[2, 3]} color="white">
              Github
            </Text>
          </A>
        </Flex>
      </Flex>
      <Flex
        // mt={3}
        mx="auto"
        width={[1, 1, 1 / 2]}
        // pt={[4, 4]}
        px={[4, 5, 7]}
        flexDirection="column"
      >
        <Form />
      </Flex>
    </Scroll>
  </Flex>
)
