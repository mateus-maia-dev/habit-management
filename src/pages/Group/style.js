import styled from "styled-components";

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

// import styled from "styled-components";

// export const Container = styled.div`
//   width: 90%;
//   min-height: 100vh;
//   height: 100%;
//   margin: 0 auto;

//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;

//   color: #fff;

//   button {
//     margin-top: 30%;
//   }
// `;
