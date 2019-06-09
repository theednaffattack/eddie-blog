import React from "react"
import { navigate } from "gatsby"

import Layout from "./layout"

const navSize = "70px"

class LayoutContainer extends React.Component {
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
    const { children } = this.props

    return (
      <>
        <Layout
          activeFn={this.handleActiveToggle}
          activeLink={"/"}
          navSize={navSize}
          navBarState={this.state.navBar}
          handleNavToggle={this.handleNavToggle}
        >
          {children}
        </Layout>
      </>
    )
  }
}

export default LayoutContainer
