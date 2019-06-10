import React from "react"

import { Box as BoxBase, Flex as FlexBase, Text as TextBase } from "rebass"

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
import { Flex960 } from "../../../components/my-styled-components"

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

const Box = styled(BoxBase)`
  ${borders}
`

const initialState = {
  ssrDone: false,
  scrollProps: {},
}

export class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.genMyScroller = this.genMyScroller.bind(this)

    this.state = {
      ssrDone: initialState.ssrDone,
      scrollProps: initialState.scrollProps,
    }
  }

  componentDidMount() {
    this.setState({
      ssrDone: true,
      scrollProps: {}, // this is where I would store props from this.scroll
    })
    try {
      this.scroll = require("react-scroll-into-view-if-needed").default
    } catch (error) {
      console.error("error loading scroll")
      console.error(error.message)
    }
  }

  genMyScroller() {
    return this.scroll
  }

  render() {
    const MyScroller = this.genMyScroller()
    const { activeLink } = this.props
    console.log(this.props)
    console.log(activeLink)
    return (
      <Flex960
        minHeight="20vh"
        flexDirection="column"
        alignItems="center"
        id="contact"
        bt="2px purple solid"
        bg="blue"
        color="white"
        py={4}
        width={1}
        style={{
          borderTop: "1px #ccc solid",
        }}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          width={[1]}
          maxWidth={960}
          p={0}
        >
          <Box my="0" width={[1, 1, 1]}>
            {this.state.ssrDone ? (
              <MyScroller
                active={activeLink === "/#contact" ? true : false}
                options={{ behavior: "smooth", scrollMode: "if-needed" }}
              >
                <Text width={1} fontSize={[4]} mb={4}>
                  Contact Me
                </Text>
              </MyScroller>
            ) : null}
          </Box>

          <Flex width={[1 / 2]} flexDirection="row">
            <Flex flexDirection="column" alignItems="center" pb={4} width={[1]}>
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
            <Flex flexDirection="column" alignItems="center" pb={4} width={[1]}>
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
          <Flex mx="auto" width={[1 / 2]} flexDirection="column">
            <Form />
          </Flex>
        </Flex>
      </Flex960>
    )
  }
}
