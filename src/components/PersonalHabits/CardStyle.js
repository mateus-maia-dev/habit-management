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
    width: 70%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #f1f1f1; //#3a3a3a;
    cursor: pointer;
    text-align: center;
    border-radius: 15px;
    border: 0px;
    color: #3a3a3a;
    //height: 30px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    margin: 6% 0% 2% 0;
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

// export const ContentCard = styled.div`
//   width: 90%;
//   margin: 0 auto;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   h2,
//   h3,
//   p {
//     padding: 15px;
//   }

//   h2 {
//     color: #bc494b;
//   }
// `;

// export const CardContainer = styled.div`
//   width: 300px;
//   height: auto;
//   margin: 3% 3%;
//   border-radius: 30px;
//   background: #2d2d2d;
//   color: #fff;
//   box-shadow: 5px 5px 15px 5px #000000;

//   text-align: center;

//   button {
//     background: #3a3a3a;
//     cursor: pointer;
//     text-align: center;
//     border-radius: 15px;
//     border: 0px;
//     color: #fff;
//     height: 30px;
//     padding: 0 30px;
//     box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
//     font-size: 1rem;
//     margin-top: 10px;
//     margin-bottom: 20px;
//   }
// `;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
