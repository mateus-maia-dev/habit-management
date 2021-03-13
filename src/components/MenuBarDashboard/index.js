import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Container, Menu, Navigation, AsideBar /*Icon*/ } from "./styles";

export const UserBar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Container>
        <Menu onClick={() => setClicked(!clicked)} clicked={clicked}>
          <FaUserCircle />
        </Menu>
      </Container>
      <AsideBar input={clicked}>
        <Navigation>
          <li>
            <a href="#home">Meus hábitos</a>
          </li>
          <li>
            <a href="#home">Configuração</a>
          </li>
          <li>
            <a href="#home">Sair</a>
          </li>
        </Navigation>
      </AsideBar>
    </>
  );
};
