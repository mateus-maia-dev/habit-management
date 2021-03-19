import { useEffect } from "react";
import { useState } from "react";
import { CardContainer, ContentCard, ContentButtons } from "./CardStyle";
import Snackbars from "../Snackbar";
import api from "../../services/api";

const GroupCard = ({ item, handleId, setMyGroup, myGroup }) => {
  const token = localStorage.getItem("token");
  const [subscribed, setSubscribed] = useState(false);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    Number(myGroup.id) === Number(item.id)
      ? setSubscribed(true)
      : setSubscribed(false);
    // eslint-disable-next-line
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
      <ContentButtons>
        <button onClick={() => handleClick()}>
          {subscribed ? "Inscrito" : "Inscrever-se"}
        </button>
        <button onClick={() => handleId(item.id)}>Saiba mais</button>
      </ContentButtons>
      <Snackbars open={open} severity="success">
        Inscrição realizada com sucesso
      </Snackbars>
    </CardContainer>
  );
};

export default GroupCard;
