import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  select {
    background: #f1f1f1;
    color: gray;
    font-size: 15px;
    border-radius: 5px;
    width: 225px;
    padding: 10px 0;
  }

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
