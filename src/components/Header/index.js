import { MenuBar } from "../MenuBar";
import { UserBar } from "../MenuBarDashboard";
import { Container, Stripes } from "./styles";

export const Header = () => {
  // const token = JSON.parse(localStorage.getItem('token'));
  // const isLogged = !!
  return (
    <Container>
      <Stripes>
        <div />
        <div />
        <div />
        {/* <div />
        <div /> */}
      </Stripes>
      <UserBar />
    </Container>
  );
};
