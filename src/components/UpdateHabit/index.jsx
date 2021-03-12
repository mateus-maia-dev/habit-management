import SimpleModal from "../SimpleModal";
import FormUpdateHabit from "./FormUpdateHabit/FormUpdateHabit";

const UpdateHabit = () => {
  return (
    <>
      <SimpleModal buttonText="Editar Hábito">
        <FormUpdateHabit />
      </SimpleModal>
    </>
  );
};

export default UpdateHabit;
