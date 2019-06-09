/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import { Text } from "rebass"

import { GlobalStyle } from "../styles/global-styles"
import HeaderNew from "./HeaderNew"
import theme from "../styles/theme"
import { Flex, LayoutFlex } from "./my-styled-components"

const Layout = ({
  children,
  activeFn,
  activeLink,
  navSize,
  navBarState,
  handleNavToggle,
}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <GlobalStyle />

          <HeaderNew
            siteTitle={data.site.siteMetadata.title}
            theme={theme}
            isOpen={navBarState}
            handleNavToggle={handleNavToggle}
            activeFn={activeFn}
            activeLink={activeLink}
            navSize={navSize}
            navBarState={navBarState}
          />
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <ThemeProvider theme={theme}>
            <LayoutFlex
              p={[0]}
              m={[0, "auto"]}
              flexDirection="column"
              alignItems="center"
              bg="blue"
              // border="crimson"
              // maxWidth={960}
            >
              <Flex
                as="main"
                mt="70px"
                width={1}
                flexDirection="column"
                // border="lime"
              >
                {children}
              </Flex>
              <Flex
                as="footer"
                width={1}
                flexDirection="column"
                color="white"
                alignItems="center"
                maxWidth={960}
              >
                <Text mb={2}>
                  Built with{" "}
                  <span role="img" aria-label="heart">
                    ❤️
                  </span>{" "}
                  by Eddie Naff
                </Text>
                <Text mb={4}>© Eddie Naff {new Date().getFullYear()}</Text>
              </Flex>
            </LayoutFlex>
          </ThemeProvider>
        </>
      )
    }}
  />
)

export default Layout // withTheme(Layout)
