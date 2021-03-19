import { FaUserCircle } from "react-icons/fa";
import {
  Container,
  Menu,
  Navigation,
  AsideBar,
  ButtonsContainer,
  LinksContainer,
  Link,
} from "./styles";
import { useHistory } from "react-router-dom";

export const UserBar = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(false);

  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
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
          <LinksContainer>
            <Link>
              <a href="/configuration">Minha Conta</a>
            </Link>
            <Link>
              <a href="/dashboard">Home</a>
            </Link>
            <Link>
              <a href="/groups">Grupos</a>
            </Link>
          </LinksContainer>
        </Navigation>

        <ButtonsContainer>
          <button onClick={() => handleLogout()}>Sair</button>
        </ButtonsContainer>
      </AsideBar>
    </>
  );
};
