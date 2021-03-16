import { CardContainer, ContentCard } from "./CardStyle";
import { useDispatch } from "react-redux";
import { getOneGroupThunk } from "../../store/modules/getOneGroup/thunk";
import { useHistory } from "react-router-dom";

const GroupCard = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <CardContainer>
      <ContentCard>
        <h2>{item.name}</h2>
        <h3>Categoria: {item.category}</h3>
        <h3>{item.description}</h3>
      </ContentCard>

      <button onClick={() => dispatch(getOneGroupThunk(item.id, history))}>
        Mais informacoes
      </button>
    </CardContainer>
  );
};

export default GroupCard;
