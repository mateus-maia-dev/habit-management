import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

    }

    body {
        background-color: #f5f5f5;
        color: #312e38;
        /* -webkit-font-smoothing: antialiased !important; */
    }

    body, input, button {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }

    a {
    text-decoration: none;
    font-size: 1.3rem;
    color: white;
  }

`;
