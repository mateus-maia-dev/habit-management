import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;

    span {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Graph = styled.div`
  width: 300px;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const CardContainer = styled.div`
  width: 300px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  text-align: left;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;

  p {
    font-weight: ${(props) => props.weight};
  }

  span {
    display: flex;
    justify-content: space-around;
  }
`;
