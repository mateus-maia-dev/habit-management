import api from "../../services/api";
import { CardContainer, ContentCard } from "./CardStyle";
import Alert from "@material-ui/lab/Alert";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { useDispatch } from "react-redux";
// import { getOneGroupThunk } from "../../store/modules/getOneGroup/thunk";
// import { useHistory } from "react-router-dom";

const GroupCard = ({ item, handleId }) => {
  const token = localStorage.getItem("token");

  const handleClick = () => {
    api
      .post(
        `/groups/${item.id}/subscribe/`,
        { key: true },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((e) => console.log(e));
  };

  return (
    <>
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
      </CardContainer>
    </>
  );
};

export default GroupCard;
