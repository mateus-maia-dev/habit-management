import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { ButtonStyled } from "./styles";
import Button from "../Buttons/index";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#f1f1f1",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ children, buttonText, icon }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {children}
    </div>
  );

  return (
    <div>
      {icon === "edit" ? (
        <>
          <ButtonStyled type="button" onClick={handleOpen}>
            {buttonText}
            <EditIcon fontSize="small" />
          </ButtonStyled>
          <Modal open={open} onClose={handleClose}>
            {body}
          </Modal>
        </>
      ) : (
        <>
          <ButtonStyled type="button" onClick={handleOpen}>
            {buttonText}
          </ButtonStyled>
          <Modal open={open} onClose={handleClose}>
            {body}
          </Modal>
        </>
      )}
    </div>
  );
}
