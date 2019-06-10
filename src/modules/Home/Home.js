import React, { Component } from "react"
// import Scroll from "react-scroll-into-view-if-needed";

import {
  Flex as FlexBase,
  Heading,
  Image as ImageBase,
  Text as TextBase,
} from "rebass"

import {
  background,
  borders,
  boxShadow,
  minHeight,
  position,
  space,
} from "styled-system"

import styled from "styled-components"

import meAvatar from "../../images/meAvatar.jpeg"
import { Projects } from "./Projects"
import { Experience } from "./Experience/Experience"
import { Contact } from "./Contact/Contact"
// import { DeviceMotionX } from "./DeviceMotion";

const Flex = styled(FlexBase)`
${background}
  ${borders}
  ${boxShadow}
  ${position}
  ${minHeight}
`

const Image = styled(ImageBase)`
  ${borders}
  ${boxShadow}
  ${space}
`

const Text = styled(TextBase)`
  ${borders}
  ${boxShadow}
  ${space}
`

class Main extends Component {
  constructor(props) {
    super(props)
    this.setRef = this.setRef.bind(this)
  }
  setRef(ref) {
    this.contactRef = ref
    this.portfolioRef = ref
    this.experienceRef = ref
  }
  render() {
    return (
      <Flex alignItems="center" flexDirection="column">
        <Flex
          width={1}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          minHeight="50vh"
          bg="blue"
          pb={[0, 5, 0]}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            p={3}
            minHeight="200px"
            width="200px"
          >
            <Image
              mt={[1, 3, 2]}
              mb={4}
              width={[1]}
              alt="Eddie Naff"
              // height="200px"
              src={meAvatar}
              borderRadius="50%"
              border="2px rgba(255,255,255,0.6) solid"
              boxShadow="2px 2px 30px  rgba(0,0,0,0.2)"
            />
          </Flex>
          <Heading fontSize={[4, 4, 5]} color="white" as="h1">
            Hi. I'm Eddie
          </Heading>
          <Text fontSize={[3, 3, 4]} color="white">
            a web developer
          </Text>
        </Flex>
        <Projects
          activeLink={this.props.activeLink}
          portfolioRef={this.portfolioRef}
        />
        <Experience
          experienceRef={this.experienceRef}
          activeLink={this.props.activeLink}
        />

        <Contact
          contactRef={this.contactRef}
          activeLink={this.props.activeLink}
        />
      </Flex>
    )
  }
}

export default Main
