import { createGlobalStyle } from "styled-components";
import musician from "../images/musician.png";
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

  &.bgMusician {
    background-image: url(${musician});
    /* background-position: center;
    background-size: cover;
    padding-top: 60px; // para descontar a altura do Header
    height: 100vh;
    margin: auto; */
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: right;
    margin: auto;

        @media (min-width: 768px) {
            width: 80%;
    }
  }

  &.bgMusicianIntro {
    background-image: url(${musician});
    /* background-position: center;
    background-size: cover;
    padding-top: 0px; // para descontar a altura do Header
    height: 60vh;
    margin: auto; */
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: right;
    margin: auto;

        @media (min-width: 768px) {
            width: 80%;
            height: 75vh;
    }
  }

  &.bgMixer {
    background-image: url(${mixer});
    /* background-position: center;
    background-size: cover;
    padding-top: 60px; // para descontar a altura do Header
    height: 100vh;
    margin: auto; */
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: right;
    margin: auto;

        @media (min-width: 768px) {
            width: 80%;
    }
  }

  &.bgGuitar{
    background-image: url(${guitar});
    /* background-position: right;
    background-size: cover;
    padding-top: 0px; // para descontar a altura do Header
    height: 100vh;
    margin: auto; */
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: right;
    margin: auto;


        @media (min-width: 768px) {
            width: 80%;
    }
  }

  &.bgBand{
    background-image: url(${band});
    /* background-position: center;
    background-size: cover;
    padding-top: 60px; // para descontar a altura do Header
    height: 100vh;
    margin: auto; */
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: right;
    margin: auto;
    min-height: 100vh;
    height: auto;

        @media (min-width: 768px) {
            width: 80%;
    }
  }

`;
