import SimpleModal from "../../SimpleModal";
import ActivitiesFormPatch from "./Form/ActivitiesFormPatch";

const ActivitiesButtonPatch = ({ itemId, groupId }) => {
  return (
    <>
      <SimpleModal buttonText="Editar Atividade">
        <ActivitiesFormPatch itemId={itemId} groupId={groupId} />
      </SimpleModal>
    </>
  );
};

export default ActivitiesButtonPatch;
