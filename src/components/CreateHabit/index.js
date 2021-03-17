import SimpleModal from "../SimpleModal";
import FormCreateHabit from "../CreateHabit/FormCreateHabit";

const CreateHabit = () => {
  return (
    <>
      <SimpleModal buttonText="Adicionar hábito +">
        <FormCreateHabit />
      </SimpleModal>
    </>
  );
};

export default CreateHabit;
