import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";
import { CardContainer, ContentCard } from "./CardStyle";
// import { useDispatch } from "react-redux";
// import { getOneGroupThunk } from "../../store/modules/getOneGroup/thunk";
// import { useHistory } from "react-router-dom";

const GroupCard = ({ item, handleId, setMyGroup, myGroup }) => {
  const token = localStorage.getItem("token");
  const [ subscribed, setSubscribed ] = useState(false)
  
  useEffect(() => {
   
    Number(myGroup.id) === Number(item.id) ? setSubscribed(true) : setSubscribed(false)
  }, [myGroup])

  const handleClick = () => {
    api.post(
      `/groups/${item.id}/subscribe/`,
      { key: true },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setMyGroup(item)
  };

  return (
    <CardContainer>
      <ContentCard>
        <h2>{item.name}</h2>
        <h3>Categoria: {item.category}</h3>
        <h3>{item.description}</h3>
      </ContentCard>
      {subscribed ?
      <button disabled={true} style={{backgroundColor:"white", color:"#2d2d2d"}}>Inscrito</button>
      :
      <button onClick={() => handleClick()}>Se inscrever</button>
      }
      <button onClick={() => handleId(item.id)}>Mais informacoes</button>
    </CardContainer>
  );
};

export default GroupCard;
