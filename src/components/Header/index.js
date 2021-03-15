import { MenuBar } from "../MenuBar";
import { UserBar } from "../MenuBarDashboard";
import { Container, Stripe, Stripes } from "./styles";
import { useSelector } from "react-redux";
import OutsideAlerter from "../OutsideAlerter";
import { useState } from "react";

export const Header = () => {
  const { token } = useSelector((state) => state.signInReducer);
  const [open, setOpen] = useState(false);
  // console.log(open);
  return (
    <>
      <Container>
        <Stripes>
          <Stripe />
          <Stripe />
          <Stripe />
        </Stripes>

        <OutsideAlerter setOpen={setOpen}>
          {token ? (
            <UserBar open={open} setOpen={setOpen} />
          ) : (
            <MenuBar open={open} setOpen={setOpen} />
          )}
        </OutsideAlerter>
      </Container>
    </>
  );
};
