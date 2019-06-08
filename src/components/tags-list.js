import React from "react"

import DisplayTags from "./display-tags"

export const Tagslist = ({ tags }) => {
  return (
    <ul>
      <DisplayTags tags={tags} />
    </ul>
  )
}
