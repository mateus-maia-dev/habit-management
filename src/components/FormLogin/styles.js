import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 300px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px 10px;
  border-radius: 8px;

  p {
    color: #bc494c;
    font-weight: bold;
    margin: 10px 0;
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
  }

  @media (min-width: 440px) {
    min-width: 400px;
  }
`;
