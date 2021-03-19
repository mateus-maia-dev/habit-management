import styled from "styled-components";
import band from "../../images/band.png";

export const ImgBand = styled.div`
  background-image: url(${band});
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  margin: auto;
`;
