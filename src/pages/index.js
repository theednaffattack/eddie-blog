import React from "react"

// import Image from "../components/image"
import SEO from "../components/seo"
import LayoutContainer from "../components/LayoutContainer"
import Home from "../modules/Home/Home"

class IndexPage extends React.Component {
  render() {
    return (
      <LayoutContainer>
        <SEO title="Home" />
        <Home />
      </LayoutContainer>
    )
  }
}

export default IndexPage
