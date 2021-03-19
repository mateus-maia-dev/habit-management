import styled from "styled-components";

export const Container = styled.div`
  z-index: 3;
  width: 35px;
  height: 30px;
  position: absolute;
  right: 20px;
  cursor: pointer;
  top: 20px;

  @media (min-width: 375px) {
    right: 40px;
  }

  @media (min-width: 768px) {
    right: 80px;
  }
`;

export const Bar = styled.div`
  height: 5px;
  width: 100%;
  background-color: #bc494c;
  display: block;
  border-radius: 5px;
  transition: 0.3s ease;
  margin-bottom: 4px;
`;

export const Bar1 = styled(Bar)`
  transform: translateY(${(props) => props.inputTranslate})
    rotate(${(props) => props.inputRotate});

  background-color: ${(props) => props.inputColor};
`;
export const Bar2 = styled(Bar)`
  opacity: ${(props) => props.inputOpacity};
`;
export const Bar3 = styled(Bar)`
  transform: translateY(${(props) => props.inputTranslate})
    rotate(${(props) => props.inputRotate});

  background-color: ${(props) => props.inputColor};
`;

export const Navigation = styled.nav`
  z-index: 2;
  padding: 0px;
  margin: 0 20px;
  transition: 0.3s ease;
`;

export const LinksContainer = styled.ul`
  list-style: none;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  height: 150px;
  padding-top: 100px;
  justify-content: center;

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

export const AsideMenu = styled.div`
  z-index: 999;
  width: 220px;
  height: 780px;
  position: fixed;
  right: ${({ input }) => (input ? "0" : "-220px")};
  top: 0;
  display: flex;
  justify-content: center;

  background-color: #bc494c;

  transition: 0.3s ease;

  @media (min-width: 768px) {
    width: 290px;
    right: ${({ input }) => (input ? "0" : "-290px")};
    height: 100vh;
  }
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

export const ContainerNav = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding-top: 0px;

  width: 216px;

  align-items: center;
`;
