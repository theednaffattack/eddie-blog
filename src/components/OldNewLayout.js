import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import MyCodeComponent from "./CodeBlock"

import Header from "./header"
import "./layout.css"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    console.log("Layout mounted")
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQueryAgain {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <MDXProvider components={{ code: MyCodeComponent }}>
              <div
                style={{
                  margin: "0 auto",
                  maxWidth: 960,
                  padding: "1.45rem 1.0875rem",
                }}
              >
                {children}
              </div>
            </MDXProvider>
          </>
        )}
      />
    )
  }
}

export default Layout
