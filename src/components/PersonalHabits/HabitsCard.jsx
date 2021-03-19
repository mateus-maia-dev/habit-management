import { CardContainer, ContentCard, ButtonsContainer } from "./CardStyle";
import UpdateHabit from "../UpdateHabit/index";
import DeleteIcon from "@material-ui/icons/Delete";

import { useDispatch } from "react-redux";
import { deleteHabitThunk } from "../../store/modules/habitReduce/thunk";
// import { CardContainer, ContentCard } from "./CardStyle";
// import UpdateHabit from "../UpdateHabit/index";

const HabitsCard = ({ item, handleId }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <h2>{item.title}</h2>
      <ContentCard>
        <div>
          <p>Dificuldade:</p>
          <p>{item.difficulty}</p>
        </div>
        <div>
          <p>Frequência:</p>
          <p>{item.frequency}</p>
        </div>
      </ContentCard>
      <ButtonsContainer>
        <UpdateHabit id={item.id} />
        <button onClick={() => dispatch(deleteHabitThunk(item.id))}>
          Excluir <DeleteIcon />
        </button>
      </ButtonsContainer>

      <button onClick={() => handleId(item.id)}>Saiba mais</button>
    </CardContainer>
  );
};

export default HabitsCard;
