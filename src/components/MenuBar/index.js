import {
  Container,
  Bar1,
  Bar2,
  Bar3,
  LinksContainer,
  Navigation,
  Link,
  AsideMenu,
  ButtonsContainer,
  ContainerNav,
} from "./styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const MenuBar = ({ open, setOpen }) => {
  const history = useHistory();

  const handleClickLogin = () => {
    setOpen(!open);
    history.push("/login");
  };

  const handleClickRegister = () => {
    setOpen(!open);
    history.push("/register");
  };

  return (
    <>
      <>
        {open ? (
          <>
            <Container onClick={() => setOpen(!open)}>
              <Bar1
                inputColor="white"
                inputRotate="-45deg"
                inputTranslate="4px"
              />
              <Bar2 inputOpacity="0" />
              <Bar3
                inputColor="white"
                inputRotate="45deg"
                inputTranslate="-14px"
              />
            </Container>
          </>
        ) : (
          <Container onClick={() => setOpen(!open)}>
            <Bar1 />
            <Bar2 />
            <Bar3 />
          </Container>
        )}
      </>

      <AsideMenu input={open}>
        <ContainerNav>
          <Navigation>
            <LinksContainer>
              <Link>
                <a href="#home">About us</a>
              </Link>
              <Link>
                <a href="#home">Gallery</a>
              </Link>
              <Link>
                <a href="#home">Blog</a>
              </Link>
              <Link>
                <a href="#home">Contact</a>
              </Link>
            </LinksContainer>
          </Navigation>
          <ButtonsContainer>
            <button onClick={() => handleClickLogin()}>Login</button>
            <button onClick={() => handleClickRegister()}>Register</button>
          </ButtonsContainer>
        </ContainerNav>
      </AsideMenu>
    </>
  );
};
