import SimpleModal from "../SimpleModal";
import FormUpdateHabit from "./FormUpdateHabit/FormUpdateHabit";

const UpdateHabit = ({ id }) => {
  return (
    <>
      <SimpleModal buttonText="Editar Hábito">
        <FormUpdateHabit id={id} />
      </SimpleModal>
    </>
  );
};
export default UpdateHabit;
