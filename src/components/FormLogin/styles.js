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
    font-size: 1.5rem;
  }

  div {
    margin: 2px;
  }

  button {
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
