import styled from "styled-components";
import band from "../../images/band.png";

export const PageWrapper = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  span {
    width: 100%;
  }

  @media (min-width: 440px) {
    min-width: 400px;
  }

  @media (min-width: 620px) {
    min-width: 300px;
    align-items: right;
    margin-left: 2%;
    margin-right: 2%;
  }

  @media (min-width: 960px) {
    min-width: 450px;
    align-items: right;
  }
`;

export const Graph = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > span {
    position: relative;
    width: 100%;
    margin-top: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
  }

  span h3 > span {
    color: #bc494c;
  }
  @media (min-width: 440px) {
    min-width: 400px;
  }

  @media (min-width: 620px) {
    min-width: 300px;
    justify-content: left;
  }

  @media (min-width: 960px) {
    min-width: 460px;
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  /* button {
    align-items: center;
    border: 0px;
    background-color: #d5d5d5;
    padding: 5px;
    border-radius: 5px;

    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
  } */
`;

export const ButtonDelete = styled.button`
  margin-left: 2%;
  color: #000;
  align-items: center;
  border: 0px;
  background-color: #d5d5d5;
  padding: 5px;
  border-radius: 5px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;

  h5 {
    color: #bc494c;
  }
  h5 > span {
    color: #312e38;
  }
  p {
    margin: 5px 0px;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  padding: 5px 10px;

  > p {
    font-weight: 500;
    color: #bc494c;
  }

  span {
    display: flex;
    justify-content: right;
  }

  span:last-child {
    font-weight: 450;
  }
`;

export const DisplayF = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: center;
`;

export const PageWrapper2 = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  span {
    width: 100%;
  }

  @media (min-width: 440px) {
    min-width: 400px;
  }

  @media (min-width: 620px) {
    min-width: 300px;
    align-items: right;
    justify-content: right;
    margin-left: 1%;
    margin-right: 1%;
  }

  @media (min-width: 960px) {
    min-width: 450px;
    justify-content: right;
    align-items: right;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 80px;
`;

export const ImgOnegruop = styled.div`
  background-image: url(${band});
  width: 100%;
  max-width: 1400px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  margin: auto;
`;

export const Heigth = styled.div`
  min-height: 100vh;
  height: 100%;
  text-align: center;

  button {
    margin-top: 30px;
    padding: 10px 50px;
    margin-bottom: 20px;
  }
`;
