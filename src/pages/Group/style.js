import styled from "styled-components";
import band from "../../images/band.png";
import guitarfhd2 from "../../images/guitarfhd2.png";

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
  background-image: url(${guitarfhd2});
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: right;
  margin: auto;
  max-width: 1400px;
`;
