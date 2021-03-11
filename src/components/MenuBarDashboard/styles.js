import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
`;

export const Menu = styled.div`
  width: 60px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    color: ${({ clicked }) => (clicked ? "#b81568" : "white")};
    transition: 0.3s ease;
  }
`;
export const AsideBar = styled.div`
  width: 270px;
  height: 100vh;
  background-color: #ff7d45;
  right: ${({ input }) => (input ? "0" : "-270px")};
  position: fixed;
  z-index: 1;
  top: 0;
  transition: 0.3s ease;
`;

export const Navigation = styled.nav`
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  height: 480px;
  justify-content: space-around;
  li {
    border-bottom: 2px solid rgba(50, 51, 80, 0.4);

    height: 50px;
    width: 90%;
    list-style: none;
  }
  a {
    font-size: 2rem;
    text-decoration: none;
  }

  a:hover {
    font-weight: 700;
  }
`;
