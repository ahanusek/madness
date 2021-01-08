import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');

*, *::before, *::after {
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding:0;
    max-width:1080px;
    margin:0 auto;
}

html{
    font-size: 62.5%;
}

body {
  
 
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    /* background-color:rgba(230, 230, 230, 0.7); */
    background-color:rgb(255, 255, 255);
}
`;

export default GlobalStyle;