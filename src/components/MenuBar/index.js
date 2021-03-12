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

export const MenuBar = () => {
  const [clicked, setClicked] = useState(false);
  const history = useHistory();
  return (
    <>
      <>
        {clicked ? (
          <>
            <Container onClick={() => setClicked(!clicked)}>
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
          <Container onClick={() => setClicked(!clicked)}>
            <Bar1 />
            <Bar2 />
            <Bar3 />
          </Container>
        )}
      </>

      <AsideMenu input={clicked}>
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
            <button onClick={() => history.push("/login")}>Login</button>
            <button onClick={() => history.push("/registro")}>Register</button>
          </ButtonsContainer>
        </ContainerNav>
      </AsideMenu>
    </>
  );
};
