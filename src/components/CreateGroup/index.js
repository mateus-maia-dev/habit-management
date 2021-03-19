import SimpleModal from "../SimpleModal";
import FormCreateGroup from "../CreateGroup/FormCreateGroup";

const CreateGroup = () => {
  return (
    <>
      <SimpleModal buttonText="Adicionar grupo ">
        <FormCreateGroup />
      </SimpleModal>
    </>
  );
};

export default CreateGroup;
