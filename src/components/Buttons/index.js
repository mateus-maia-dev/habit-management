import { ButtonStyled } from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

const Button = ({ icon, children }) => {
  switch (icon) {
    case "add":
      return (
        <ButtonStyled>
          {children}
          <AddIcon fontSize="small" />
        </ButtonStyled>
      );

    case "edit":
      return (
        <ButtonStyled>
          {children}
          <EditIcon fontSize="small" />
        </ButtonStyled>
      );

    case "delete":
      return (
        <ButtonStyled>
          {children}
          <DeleteIcon fontSize="small" />
        </ButtonStyled>
      );

    default:
      return <ButtonStyled>{children}</ButtonStyled>;
  }
};

export default Button;
