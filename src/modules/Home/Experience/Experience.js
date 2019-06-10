import React from "react"
// import Scroll from "react-scroll-into-view-if-needed"

import {
  Box as BoxBase,
  Card as CardBase,
  Flex as FlexBase,
  Heading,
  Text as TextBase,
} from "rebass"

import {
  background,
  borders,
  boxShadow,
  minHeight,
  overflow,
  position,
  space,
} from "styled-system"

import styled from "styled-components"

import { Flex960 } from "../../../components/my-styled-components"
import { experience as history } from "./relevant_work_history"

const Flex = styled(FlexBase)`
  ${background}
    ${borders}
    ${boxShadow}
    ${position}
    ${minHeight}
  `

const Box = styled(BoxBase)`
  ${borders}
  ${overflow}
`

const Card = styled(CardBase)`
  ${overflow}
`

const Text = styled(TextBase)`
  ${space}
`

const breakBoarder = "1px rgba(0,0,0,0.1) solid"

const sectionPys = [3]
const sectionPxs = [3, 4]

const ExperienceCard = ({ expArr }) => (
  <>
    {expArr.map((job, index) => {
      return (
        <Card
          // bg="violet"
          key={Math.random()}
          fontSize={[2]}
          fontWeight="bold"
          width={[1, 1, 1]}
          // px={[3]}
          // py={[3]}
          mx="auto"
          my={4}
          mb={5}
          bg="#f6f6ff"
          borderRadius={8}
          border="1px rgba(0, 0, 0, 0.35) solid"
          boxShadow="0 1px 8px rgba(0, 0, 0, 0.15)"
          overflow="hidden"
        >
          <Box
            bg="#ccc"
            py={sectionPys}
            px={sectionPxs}
            borderBottom={breakBoarder}
          >
            <Flex alignItems="center">
              <Box>
                <Heading fontSize={[3]}>{job.companyName}</Heading>
              </Box>
              <Box mx="auto" />
              <Box>
                <Text color="indigo6">
                  {job.fromDate} - {job.toDate}
                </Text>
              </Box>
            </Flex>
            <Text color="violet5" fontSize="1.3em">
              {job.title}
            </Text>
          </Box>
          <Box py={sectionPys} px={sectionPxs} className="content">
            <Text>{job.jobDescription}</Text>
            <ul>
              {job.jobDuties.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
          </Box>
          <Flex
            borderTop={breakBoarder}
            py={sectionPys}
            px={sectionPxs}
            bg="#ccc"
            mt="auto"
          >
            <Box mr={3}>
              <Text>{job.address}</Text>
            </Box>
            <Box>
              <Text>{job.phone}</Text>
            </Box>
          </Flex>
        </Card>
      )
    })}
  </>
)

const initialState = {
  ssrDone: false,
  scrollProps: {},
}
export class Experience extends React.Component {
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
    const MyScroller = this.scroll
    return MyScroller
  }
  render() {
    const MyScroller = this.genMyScroller()
    const { activeLink } = this.props // portfolioRef
    const active = activeLink === "/#experience"
    return (
      <Flex
        width={1}
        minHeight="20vh"
        flexDirection="column"
        alignItems="center"
        id="experience"
        bt="2px purple solid"
        bg="#eee"
        mt={3}
        py={4}
        // px={[3, 5]}
        borderTop={breakBoarder}
      >
        <Flex960 p={[2, 0]} flexDirection="column" maxWidth={960}>
          {this.state.ssrDone ? (
            <MyScroller
              active={active}
              options={{ behavior: "smooth", scrollMode: "if-needed" }}
            >
              <Text my="0" fontSize={[4]}>
                Experience
              </Text>
              <ExperienceCard expArr={history} />
            </MyScroller>
          ) : null}
        </Flex960>
      </Flex>
    )
  }
}
