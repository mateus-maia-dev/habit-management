import { useDispatch } from "react-redux";
import { getGroup } from "../../store/modules/groupReduce/actios";
import GroupUpdate from "../GroupUpdate/GrouUpdate";

const GroupCard = ({ group }) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(getGroup(group.id), console.log(group.id))}>
      <p>{group.name}</p>
      <h1>{group.category}</h1>
      <h2>{group.description}</h2>

      <GroupUpdate
        id={group.id}
        name={group.name}
        description={group.description}
      />
    </div>
  );
};

export default GroupCard;
