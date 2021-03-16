import { CardContainer, ContentCard } from "./CardStyle";
import UpdateHabit from "../UpdateHabit/index";
import Button from "../Buttons";

import { useDispatch } from "react-redux";
import { deleteHabitThunk } from "../../store/modules/habitReduce/thunk";

const HabitsCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer>
      <ContentCard>
        <h2>{item.title}</h2>
        <div>
          <p>Dificuldade:</p>
          <p>{item.difficulty}</p>
        </div>
        <div>
          <p>Frequência:</p>
          <p>{item.frequency}</p>
        </div>
      </ContentCard>
      <UpdateHabit id={item.id} />
      <Button icon="delete" onClick={() => dispatch(deleteHabitThunk(item.id))}>
        Excluir
      </Button>
    </CardContainer>
  );
};

export default HabitsCard;
