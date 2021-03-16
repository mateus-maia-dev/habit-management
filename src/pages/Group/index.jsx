import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupRequestThunk } from "../../store/modules/groupReduce/thunk";

import GroupList from "../../components/Groups/GroupList";

import { Container } from "./style";

const Group = () => {
  const changeReduce = useSelector((state) => state.groupIDReducer.change);
  const group = useSelector((state) => state.groupIDReducer.groupData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(groupRequestThunk());
  }, []);

  useEffect(() => {
    dispatch(groupRequestThunk());
  }, [changeReduce]);

  return (
    <Container>
      <GroupList items={group} />
    </Container>
  );
};

export default Group;
