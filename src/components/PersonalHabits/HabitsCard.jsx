import { CardContainer, ContentButtons, ContentCard } from "./CardStyle";
import UpdateHabit from "../UpdateHabit/index";
import Button from "../Buttons";

import { useDispatch } from "react-redux";
import { deleteHabitThunk } from "../../store/modules/habitReduce/thunk";
// import { CardContainer, ContentCard } from "./CardStyle";
// import UpdateHabit from "../UpdateHabit/index";

const HabitsCard = ({ item }) => {
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
      <ContentButtons>
        <UpdateHabit id={item.id} />
        <Button
          icon="delete"
          onClick={() => dispatch(deleteHabitThunk(item.id))}
        >
          Excluir
        </Button>
      </ContentButtons>
    </CardContainer>
  );
};

export default HabitsCard;
