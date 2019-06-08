// src/CodeBlock.js
import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

// import React from "react"
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { Box as BoxBase, Flex as FlexBase } from "rebass"
import { borders } from "styled-system"
import styled from "styled-components"

// const Flex = styled(FlexBase)`
//   ${borders}
// `

// const Box = styled(BoxBase)`
//   ${borders}
// `

// const CodeBlock = ({ children, theme, ...props }) => {
//   console.log("RFC MOUNTED")
//   console.log(props)
//   return (
//     <LiveProvider code={children}>
//       <Flex width={1}>
//         <Box width={1 / 2} border="2px rebeccapurple solid">
//           <LiveEditor />
//           <LiveError />
//         </Box>
//         <Box width={1 / 2} border="2px limegreen solid">
//           <LivePreview />
//         </Box>
//       </Flex>
//     </LiveProvider>
//   )
// }

// export default CodeBlock

const CodeBlock = ({ children }) => {
  return (
    <Highlight {...defaultProps} code={children} language="javascript">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
