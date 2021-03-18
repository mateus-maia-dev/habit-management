import styled from "styled-components";
import band from "../../images/band.png";

export const Container = styled.div`
  width: 90%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  color: #fff;

  button {
    margin-top: 30%;
  }
`;

export const ImgBand = styled.div`
  background-image: url(${band});
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: right;
  margin: auto;
`;
