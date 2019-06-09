// src/components/Experience.js

import React, { Component } from "react"
import Scroll from "react-scroll-into-view-if-needed"

import {
  Box as BoxBase,
  Card as CardBase,
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
  overflow,
  position,
  space,
} from "styled-system"

import styled from "styled-components"

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
          width={[1, 1, 1 / 2]}
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

export const Experience = ({ activeLink }) => (
  <Flex
    minHeight="20vh"
    flexDirection="column"
    id="contact"
    bt="2px purple solid"
    bg="#eee"
    mt={3}
    py={4}
    px={[3, 5]}
    borderTop={breakBoarder}
  >
    <Scroll
      active={activeLink === "experience" ? true : false}
      options={{ behavior: "smooth", scrollMode: "if-needed" }}
    >
      <Box my="0" mx="auto" width={[1, 1, 1 / 2]}>
        <Text fontSize={[4]} width={[1]}>
          Experience
        </Text>
      </Box>
      <ExperienceCard expArr={history} />
    </Scroll>
  </Flex>
)
