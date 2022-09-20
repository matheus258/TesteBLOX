import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0 ;
    }
    :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1em;
    line-height: 24px;
    font-weight: 400;
    color: rgba(27, 27, 27, 0.87);
    background-color: #fdfdfd;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    }

    a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
    color: aliceblue;
    }

    a:hover {
    color: #319D50;
    }

    /* a:hover {
    color: #535bf2;
    } */

    */ body {
    margin: 0;
    width: 100vw;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    }
`
export default GlobalStyle;