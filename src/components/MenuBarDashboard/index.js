import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Container, Menu, Navigation, AsideBar, Icon } from "./styles";
import { useHistory } from "react-router-dom";

export const UserBar = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <>
      <Container>
        <Menu onClick={() => setOpen(!open)} clicked={open}>
          <FaUserCircle />
        </Menu>
      </Container>
      <AsideBar input={open}>
        <Navigation>
          <li>
            <a href="#home">Meus hábitos</a>
          </li>
          <li>
            <a href="#home">Configuração</a>
          </li>
          <li>
            <a href="/" onClick={() => handleLogout()}>
              Sair
            </a>
          </li>
        </Navigation>
      </AsideBar>
    </>
  );
};
