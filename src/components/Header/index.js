// import { MenuBar } from "../MenuBar";
import { UserBar } from "../MenuBarDashboard";
import { Container, Stripe, Stripes } from "./styles";

export const Header = () => {
  // const token = JSON.parse(localStorage.getItem('token'));
  // const isLogged = !!
  return (
    <>
      <Container>
        <Stripes>
          <Stripe />
          <Stripe />
          <Stripe />
        </Stripes>
        <UserBar />
      </Container>
    </>
  );
};
