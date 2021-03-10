import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

// import {
//   Container,
//   MenuBar,
//   Bar1,
//   Bar2,
//   Bar3,
//   LinksContainer,
//   Navigation,
//   Link,
//   AsideMenu,
//   ButtonsContainer,
//   Container2,
// } from "./styles";
// import { useState } from "react";

// export const Header = () => {
//   const [clicked, setClicked] = useState(false);
//   console.log(clicked);
//   return (
//     <>
//       <Container>
//         <>
//           {clicked ? (
//             <>
//               <MenuBar onClick={() => setClicked(!clicked)}>
//                 <Bar1
//                   inputColor="white"
//                   inputRotate="-45deg"
//                   inputTranslate="4px"
//                 />
//                 <Bar2 inputOpacity="0" />
//                 <Bar3
//                   inputColor="white"
//                   inputRotate="45deg"
//                   inputTranslate="-14px"
//                 />
//               </MenuBar>
//             </>
//           ) : (
//             <MenuBar onClick={() => setClicked(!clicked)}>
//               <Bar1 />
//               <Bar2 />
//               <Bar3 />
//             </MenuBar>
//           )}
//         </>
//         {!clicked ? (
//           <AsideMenu />
//         ) : (
//           <AsideMenu inputWidth="220px">
//             <Container2>
//               <Navigation>
//                 <LinksContainer>
//                   <Link>
//                     <a href="#home">About us</a>
//                   </Link>
//                   <Link>
//                     <a href="#home">Commons questions</a>
//                   </Link>
//                 </LinksContainer>
//               </Navigation>
//               <ButtonsContainer>
//                 <button>Login</button>
//                 <button>Register</button>
//               </ButtonsContainer>
//             </Container2>
//           </AsideMenu>
//         )}
//       </Container>
//     </>
//   );
// };
