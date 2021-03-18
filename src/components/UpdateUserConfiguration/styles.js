import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
`;
export const CardContent = styled.div`
  width: 300px;
  height: auto;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px 10px;
  border-radius: 8px;
  margin-bottom: 20px;

  @media (min-width: 440px) {
    min-width: 400px;
  }

  h3 {
    color: #bc494c;
    font-weight: bold;
    margin: 10px 0px;
  }

  p {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const FormWrapper = styled.div`
  width: 300px;
  height: auto;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px 10px;
  border-radius: 8px;

  @media (min-width: 440px) {
    min-width: 400px;
  }

  p {
    color: #bc494c;
    font-weight: bold;
    margin: 10px 0px;
    font-size: 1.1rem;
  }

  div {
    margin: 2px;
  }

  button {
    margin-top: 10px;
  }

  a {
    margin-top: 5px;
  }

  .inputBox {
    width: 80%;
    margin: 10px 0px;
    z-index: 0;
    padding: 10px 5px;
    background-color: #f1f1f1;
    border-radius: 4px;
    border: 1px solid lightgray;
  }

  span {
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
    text-align: center;
    width: 100%;
    display: block;
    color: #bc494c;
  }

  @media (min-width: 440px) {
    min-width: 400px;
  }
`;

export const ButtonForm = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.btnWidth};
  border-radius: 5px;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
