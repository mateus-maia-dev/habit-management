import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
`;

export const Menu = styled.div`
  width: 30px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
  position: absolute;
  top: 7px;
  right: 10px;

  @media (min-width: 375px) {
    right: 30px;
  }

  @media (min-width: 768px) {
    right: 80px;
  }

  svg {
    width: 100%;
    height: 100%;
    color: ${({ clicked }) => (clicked ? "#bc494c" : "white")};
    transition: 0.3s ease;
  }

  @media (min-width: 1440px) {
    margin-right: 30px;
  }
`;
export const AsideBar = styled.div`
  width: 270px;
  height: 100vh;
  background-color: #bc494c;
  right: ${({ input }) => (input ? "0" : "-270px")};
  position: fixed;
  z-index: 1;
  top: 0;
  transition: 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navigation = styled.nav`
  z-index: 2;
  padding: 0px;
  margin: 0px;
  transition: 0.3s ease;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-evenly;

  width: 200px;

  button {
    height: 40px;
    font-size: 1.3rem;
    font-weight: 500;
    background-color: black;
    color: white;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: gray;
    }
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 250px;
  padding-top: 100px;
  justify-content: center;
  width: 150px;

  li:first-child {
    height: 32px;
  }
`;

export const Link = styled.li`
  list-style: none;
  margin: 10px;
  border-bottom: 2px solid;
  height: 60px;

  a:hover {
    font-weight: 800;
  }
`;
