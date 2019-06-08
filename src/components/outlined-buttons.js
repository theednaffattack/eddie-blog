// outlinedButtons.js
// outlined-buttons.js
import React from "react"
import Button from "@material-ui/core/Button"

function OutlinedButtons() {
  return (
    <>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </>
  )
}

// Demos must be default exported
export default OutlinedButtons
