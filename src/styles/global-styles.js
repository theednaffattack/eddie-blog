import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');
 
html {
  box-sizing: border-box;
  height: 100%;
}  
body {
    margin: 0;
    padding: 0;
    text-size-adjust: 100%;
    font-family: 'Montserrat', sans-serif;
    
  }
a {
text-decoration: none;
}
ul {
margin: 0 auto;
list-style-type: none;
}
*, *:before, *:after {
  box-sizing: inherit;
}
`
