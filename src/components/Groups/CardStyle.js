import styled from "styled-components";

export const ContentCard = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2,
  h3 {
    padding: 15px;
  }

  h2 {
    color: #bc494b;
  }
`;

export const CardContainer = styled.div`
  width: 300px;
  height: auto;
  margin: 3% 3%;
  border-radius: 30px;
  background: #2d2d2d;
  color: #fff;
  box-shadow: 5px 5px 15px 5px #000000;

  text-align: center;

  button {
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
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;
