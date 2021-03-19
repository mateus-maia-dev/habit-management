import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: 270px;
  /* height: auto; */
  margin: 10px;
  border-radius: 5px;
  background: #f1f1f1;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px;

  h2 {
    font-size: 1.2rem;
    margin: 2% 0% 2% 0;
  }

  button {
    width: 150px;
    border: none;
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    background-color: #bebebe;

    border-radius: 15px;

    &:hover {
      background-color: #bc494c;
    }
  }
`;

export const ButtonDiv = styled.div``;

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
    margin: 2% 0% 2% 0;
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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: 150px;
    border: none;
    margin: 5px 0;

    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    background-color: #bebebe;

    border-radius: 15px;

    &:hover {
      background-color: #bc494c;
    }
  }
`;
