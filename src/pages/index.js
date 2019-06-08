import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const navSize = "70px"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.handleActiveToggle = this.handleActiveToggle.bind(this)
    this.handleNavToggle = this.handleNavToggle.bind(this)

    this.state = {
      navBar: "isClosed",
      active: "",
    }
  }

  handleActiveToggle(event) {
    event.preventDefault()
    let activeId = event.target.getAttribute("id")
    console.log("id attribute: " + event.target.getAttribute("id"))
    this.setState(prevState => ({
      active: activeId,
      navBar: "isClosed",
    }))

    navigate(activeId)
  }

  handleNavToggle(event) {
    console.log("nav toggled")
    event.preventDefault()
    let newValue = ""
    if (this.state.navBar === "isOpen") {
      newValue = "isClosed"
    }
    if (this.state.navBar === "isClosed") {
      newValue = "isOpen"
    }
    console.log("VIEW NEWVALUE")
    console.log(newValue)
    this.setState(prevState => ({
      navBar: newValue,
    }))
  }
  render() {
    return (
      <Layout
        activeFn={this.handleActiveToggle}
        activeLink={"/"}
        navSize={navSize}
        navBarState={this.state.navBar}
        handleNavToggle={this.handleNavToggle}
      >
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
