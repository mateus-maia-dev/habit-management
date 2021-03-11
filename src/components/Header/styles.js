import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100vw;
  height: 100px;
  background-color: #373c56;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Stripes = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;

  div {
    height: 100px;
    width: 30px;
    background-color: red;
  }
`;
