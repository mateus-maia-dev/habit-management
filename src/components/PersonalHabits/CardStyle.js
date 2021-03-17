import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: auto;
  margin: 10px;
  border-radius: 5px;
  background: #f1f1f1;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  h2 {
    font-size: 1.2rem;
  }

  @media (min-width: 400px) {
    width: 180px;
    height: 150px;
  }

  /* button {
    background: #3a3a3a;
    cursor: pointer;
    text-align: center;
    border-radius: 15px;
    border: 0px;
    color: #fff;
    height: 30px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    margin: 2px 0;
  } */
`;

export const ContentCard = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 5px 0;
  }

  div {
    display: flex;
    justify-content: space-around;
    width: 90%;

    color: #282c34;
  }
`;

export const ContentButtons = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
`;
