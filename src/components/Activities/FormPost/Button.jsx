import SimpleModal from "../../SimpleModal";
import ActivitiesFormPost from "./Form/ActivitiesFormPost";

const ActivitiesButtonPost = ({ groupId }) => {
  return (
    <>
      <SimpleModal buttonText="Adicionar Atividade">
        <ActivitiesFormPost groupId={groupId} />
      </SimpleModal>
    </>
  );
};

export default ActivitiesButtonPost;
