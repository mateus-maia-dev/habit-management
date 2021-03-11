import { MenuBar } from "../MenuBar";
import { UserBar } from "../MenuBarDashboard";
import { Container, Stripes } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Stripes>
        <div></div>
        <div></div>
        <div></div>
      </Stripes>
      <UserBar />
    </Container>
  );
};
