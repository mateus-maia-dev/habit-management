import styled from "styled-components";
import guitarfhd2 from "../../images/guitarfhd2.png";

export const Container = styled.div`
  width: 90%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 60px;
`;

export const HeaderLine = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
  text-align: center;

  @media (min-width: 400px) {
    width: 80%;
    flex-direction: row;
    justify-content: flex-start;
  }

  h1 {
    color: #bc494c;
    padding-left: 20px;
  }

  button {
    background-color: #d5d5d5;
    margin-left: 0px;
    padding: 5px 10px;
    color: #282c34;
    margin-top: 5px;
    font-size: 1.25rem;

    &:hover {
      font-weight: bold;
      background-color: #d5d5d5;
    }

    @media (min-width: 400px) {
      margin-left: 50px;
    }
  }
`;

export const ImgBand = styled.div`
  background-image: url(${guitarfhd2});
  width: 100%;
  max-width: 1750px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: right;
  margin: auto;
`;
