import { useDispatch } from "react-redux";
import api from "../../services/api";
import { getGroup } from "../../store/modules/groupReduce/actios";
import GroupUpdate from "../GroupUpdate/GrouUpdate";

const GroupCard = ({ group }) => {
  const dispatch = useDispatch();

  const subscribeToAGroup = (groupID) => {
    const token = localStorage.getItem("token");
    api
      .post(
        `/groups/${groupID}/subscribe/`,
        { key: true },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div onClick={() => dispatch(getGroup(group.id))}>
      <p>{group.name}</p>
      <h1>{group.category}</h1>
      <h2>{group.description}</h2>
      <button onClick={() => subscribeToAGroup(group.id)}>Subscribe</button>

      <GroupUpdate
        id={group.id}
        name={group.name}
        description={group.description}
      />
    </div>
  );
};

export default GroupCard;
