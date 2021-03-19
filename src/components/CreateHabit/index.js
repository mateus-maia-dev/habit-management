import SimpleModal from "../SimpleModal";
import FormCreateHabit from "../CreateHabit/FormCreateHabit";
import { Container } from "./styles";

const CreateHabit = () => {
  return (
    <Container>
      <SimpleModal buttonText="Adicionar hábito">
        <FormCreateHabit />
      </SimpleModal>
    </Container>
  );
};

export default CreateHabit;
