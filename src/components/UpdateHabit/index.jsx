import SimpleModal from "../SimpleModal";
import FormUpdateHabit from "./FormUpdateHabit/FormUpdateHabit";

const UpdateHabit = ({ id }) => {
  return (
    <>
      <SimpleModal buttonText="Editar " icon="edit">
        <FormUpdateHabit id={id} />
      </SimpleModal>
    </>
  );
};
export default UpdateHabit;
