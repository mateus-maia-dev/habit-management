import SimpleModal from "../../SimpleModal";
import GoalsFormPost from "./Form/GoalsFormPost";

const GoalsButtonPost = ({ groupId }) => {
  return (
    <>
      <SimpleModal buttonText="Adicionar Objetivo">
        <GoalsFormPost groupId={groupId} />
      </SimpleModal>
    </>
  );
};

export default GoalsButtonPost;
