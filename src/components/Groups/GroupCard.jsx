import api from "../../services/api";
import { useState } from "react";
import { CardContainer, ContentCard } from "./CardStyle";
import Snackbars from "../Snackbar";
// import { useDispatch } from "react-redux";
// import { getOneGroupThunk } from "../../store/modules/getOneGroup/thunk";
// import { useHistory } from "react-router-dom";

const GroupCard = ({ item, handleId }) => {
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");

  const handleClick = () => {
    api.post(
      `/groups/${item.id}/subscribe/`,
      { key: true },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setOpen(true);
  };

  setTimeout(
    function () {
      setOpen(false);
    },

    3000
  );

  return (
    <CardContainer>
      <h2>{item.title}</h2>
      <ContentCard>
        <h2>{item.name}</h2>
        <div>
          <p>Categoria:</p>
          <p>{item.category}</p>
        </div>
        <div>
          <p>{item.description}</p>
        </div>
      </ContentCard>
      <button onClick={() => handleClick()}>Se inscrever</button>
      <button onClick={() => handleId(item.id)}>Mais informacoes</button>
      <Snackbars open={open} severity="success">
        Inscrição realizada com sucesso
      </Snackbars>
    </CardContainer>
  );
};

export default GroupCard;
