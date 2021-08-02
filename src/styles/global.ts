import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px
  }
  .nav-links {
    display: flex;
    list-style: none;
    padding-left: 0;
  }
  .nav-link-item {
    padding-right: 2rem;
  }
  .nav-link-text {
    color: black;
  }
`

export default GlobalStyle
