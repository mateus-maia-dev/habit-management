import { createGlobalStyle } from "styled-components";
import mixer from "../images/mixer.png";
import guitar from "../images/guitar.png";
import band from "../images/band.png";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

    }

    body {
        background-color: #222222;
        color: #312e38;
        /* -webkit-font-smoothing: antialiased !important; */
    }

    body, input, button {
        font-family: "Roboto", sans-serif;
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
