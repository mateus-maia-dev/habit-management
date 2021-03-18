import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 420px) {
    min-width: 90%;
  }

  @media (min-width: 620px) {
    min-width: 90%;
    align-items: right;
    margin-left: 2%;
    margin-right: 2%;
  }

  @media (min-width: 960px) {
    min-width: 700px;
    align-items: right;
  }
`;

export const Graph = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

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
    min-width: 350px;
  }

  @media (min-width: 620px) {
    justify-content: left;
  }

  @media (min-width: 960px) {
    min-width: 460px;
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  width: 300px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  margin-top: 20px;

  @media (min-width: 440px) {
    min-width: 100%;
  }

  @media (min-width: 620px) {
    min-width: 460px;
    justify-content: left;
  }
`;

export const CardHeader = styled.div`
  text-align: left;
  padding: 5px 10px;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  padding: 10px;

  > span p:last-child {
    font-weight: 500;
    color: #bc494c;
  }

  span {
    display: flex;
    justify-content: right;
    margin: 5px;
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
  align-items: center;

  .btn {
    width: 100%;
    text-align: center;
  }

  .btn button {
    margin-top: 30px;
    padding: 10px 50px;
  }
`;

export const Title = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
`;

export const Section = styled.div`
  width: 100%;
`;
