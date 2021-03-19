import SimpleModal from "../../SimpleModal";
import ActivitiesFormPatch from "./Form/ActivitiesFormPatch";

const ActivitiesButtonPatch = ({ itemId, groupId }) => {
  return (
    <>
      <SimpleModal buttonText="Editar ">
        <ActivitiesFormPatch itemId={itemId} groupId={groupId} />
      </SimpleModal>
    </>
  );
};

export default ActivitiesButtonPatch;
