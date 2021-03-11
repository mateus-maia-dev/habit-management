import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100vw;
  height: 70px;
  background-color: #373c56;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1440px) {
    justify-content: space-between;
  }
`;

export const Stripes = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
  margin-left: 70px;

  div {
    height: 70px;
    width: 30px;
    background-color: red;
  }

  @media (min-width: 768px) {
    width: 600px;

    div {
      width: 120px;
    }
  }

  @media (min-width: 1440px) {
    margin-left: 440px;
  }
`;
