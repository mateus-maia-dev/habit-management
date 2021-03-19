import SimpleModal from "../../SimpleModal";
import GoalsFormPatch from "./Form/GoalsFormPatch";

const GoalsButtonPatch = ({ itemId, groupId }) => {
  return (
    <>
      <SimpleModal buttonText="Editar">
        <GoalsFormPatch itemId={itemId} groupId={groupId} />
      </SimpleModal>
    </>
  );
};

export default GoalsButtonPatch;
