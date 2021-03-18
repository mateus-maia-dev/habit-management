import styled from "styled-components";
import musician from "../../images/musician.png";
export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 120px;
`;

export const ImgLogin = styled.div`
  background-image: url(${musician});
  width: 100%;
  max-width: 1200px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  margin: auto;
`;
