import { CardContainer, ContentCard } from "./CardStyle";
// import { useDispatch } from "react-redux";
// import { getOneGroupThunk } from "../../store/modules/getOneGroup/thunk";
// import { useHistory } from "react-router-dom";

const GroupCard = ({ item, handleId }) => {
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

      <button onClick={() => handleId(item.id)}>Mais informacoes</button>
    </CardContainer>
  );
};

export default GroupCard;
