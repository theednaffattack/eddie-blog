import React, { Component } from "react"
// import Scroll from "react-scroll-into-view-if-needed"
import {
  Box as BoxBase,
  Card as CardBase,
  Flex as FlexBase,
  Heading as HeadingBase,
  Text as TextBase,
} from "rebass"
import posed from "react-pose"
import styled from "styled-components"
import {
  borders,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  space,
} from "styled-system"

const projectData = [
  {
    name: "Stock Market App",
    description: "A Free Code Camp Challenge",
    tags: "",
  },
  {
    name: "Movie Showtimes",
    description: "Something handy to have",
    tags: "",
  },
  {
    name: "Recipe Box",
    description: "Something handy to have",
    tags: "",
  },
  {
    name: "Podcast Player",
    description: "Personal Use, as I don't like the apple player",
    tags: "",
  },
]

const FlexContainerBase = posed(FlexBase)({
  enter: {
    y: 0,
    opacity: 1,
    delay: 3000,
    beforeChildren: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: { y: 100, opacity: 0 },
})

const FlexContainer = styled(FlexContainerBase)`
  ${borders}
`

const Flex = styled(FlexBase)`
${maxWidth}
  ${minWidth}
  ${borders}
`

const Text = styled(TextBase)`
  ${space}
`

const Card = styled(CardBase)`
${minWidth}
  ${minHeight}
  ${overflow}
`

const Heading = styled(HeadingBase)`
  ${space}
  ${borders}
`

const PosedCard = posed(Card)({
  enter: { x: 0 },
  exit: { x: ({ delta }) => -delta * 100 + "vw" },
})

// const PosedFlex = posed(Flex)({
//   tada: {
//     x: "0%",

//     delayChildren: 200,
//     staggerChildren: 50,
//   },
//   nottoda: { x: "-100%", delay: 300 },
// })

const initialState = {
  ssrDone: false,
  scrollProps: {},
}

export class Projects extends Component {
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
    return (
      <Flex key="outer" flexDirection="column" maxWidth={960}>
        <FlexContainer
          mx="auto"
          justifyContent="center"
          width={[1, 1, 1]}
          py={[4, 4]}
          px={[3, 3, 3]}
          flexWrap="wrap"
          id="projects"
          flexDirection="column"
        >
          {this.state.ssrDone ? (
            <MyScroller
              active={activeLink === "/#projects" ? true : false}
              options={{ behavior: "smooth", scrollMode: "if-needed" }}
            >
              <Flex justifyContent="center" flexWrap="wrap">
                <Text
                  key="text"
                  color="white"
                  alignSelf="left"
                  pl={[3, 6, 3]}
                  fontSize={[4]}
                  mt={1}
                  mb={4}
                  width={[1]}
                >
                  Projects
                </Text>
                <>
                  {projectData.map(project => (
                    <PosedCard
                      fontSize={3}
                      fontWeight="bold"
                      width={[1, 1 / 3, 1 / 5]}
                      minWidth="250px"
                      mx={1}
                      my={1}
                      height="100px"
                      bg="#f6f6ff"
                      borderRadius={2}
                      border={"1px solid rgba(0, 0, 0, 0.15)"}
                      boxShadow="0 1px 4px rgba(0, 0, 0, 0.08)"
                      key={Math.random()}
                      variant="outline"
                      overflow="hidden"
                    >
                      <Heading
                        fontSize={[2, 3]}
                        py={1}
                        bg="#eee"
                        borderBottom={"1px solid rgba(0, 0, 0, 0.15)"}
                        textAlign="center"
                      >
                        {project.name}
                      </Heading>
                      <BoxBase p={2}>&nbsp;</BoxBase>
                    </PosedCard>
                  ))}
                </>
              </Flex>
            </MyScroller>
          ) : (
            ""
          )}
        </FlexContainer>
      </Flex>
    )
  }
}
