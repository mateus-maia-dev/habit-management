import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

import { CardContainer, ContentCard } from "./CardStyle";
import Snackbars from "../Snackbar";
// import { useDispatch } from "react-redux";
// import { getOneGroupThunk } from "../../store/modules/getOneGroup/thunk";
// import { useHistory } from "react-router-dom";

const GroupCard = ({ item, handleId, setMyGroup, myGroup }) => {
  const token = localStorage.getItem("token");
  const [subscribed, setSubscribed] = useState(false);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    Number(myGroup.id) === Number(item.id)
      ? setSubscribed(true)
      : setSubscribed(false);
  }, [myGroup]);

  const handleClick = () => {
    api.post(
      `/groups/${item.id}/subscribe/`,
      { key: true },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setOpen(true);
    setMyGroup(item);
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

      {subscribed ? (
        <button
          disabled={true}
          style={{ backgroundColor: "white", color: "#2d2d2d" }}
        >
          Inscrito
        </button>
      ) : (
        <button onClick={() => handleClick()}>Se inscrever</button>
      )}
      <button onClick={() => handleId(item.id)}>Mais informacoes</button>

      <Snackbars open={open} severity="success">
        Inscrição realizada com sucesso
      </Snackbars>
    </CardContainer>
  );
};

export default GroupCard;
