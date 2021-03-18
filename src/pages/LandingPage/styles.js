import styled from "styled-components";
import musician from "../../images/musician.png";

export const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;

  h1 {
    font-size: 3.25rem;
    font-weight: 800;
    color: black;
    padding-top: 90px;

    @media (min-width: 768px) {
      font-size: 6rem;
      padding-top: 120px;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #bc494c;
    padding-top: 10px;
  }
`;

export const BottomBar = styled.div`
  background-color: #222222;
  color: white;
  text-align: center;
  padding-top: 20px;

  h2 {
    font-size: 1rem;
    color: #bc494c;
    padding: 5px 0;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5px; // 0

    @media (min-width: 768px) {
      justify-content: center;
    }
  }

  @media (min-width: 768px) {
  }
`;

export const BottomBarList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    margin: 10px;

    p {
      padding-left: 5px;
    }
  }
`;

export const ImgLandingPage = styled.div`
  background-image: url(${musician});
  width: 100%;
  max-width: 1200px;
  height: 65vh;
  background-size: cover;
  background-position: center;
  margin: auto;

  @media (min-width: 768px) {
    height: 80vh;
  }
`;
