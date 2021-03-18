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
  margin: 20px 0px 5px 8px;
  flex-direction: column;

  @media (min-width: 400px) {
    width: 80%;
    flex-direction: row;
    justify-content: flex-start;
  }

  h1 {
    color: #bc494c;
  }

  button {
    background-color: #d5d5d5;
    margin-left: 0px;
    padding: 5px 10px;
    color: #282c34;
    margin-top: 5px;

    @media (min-width: 400px) {
      margin-left: 50px;
    }
  }
`;

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

  button {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #f1f1f1;

    text-align: center;
    border-radius: 15px;
    border: 0px;
    color: #3a3a3a;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgb(0 0 0 / 30%);
    font-size: 1rem;
    margin: 6% 0% 2% 0;

    cursor: pointer;
  }
`;

export const ImgDashboard = styled.div`
  background-image: url(${guitarfhd2});
  width: 100%;
  max-width: 1400px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: right;
  margin: auto;
`;
