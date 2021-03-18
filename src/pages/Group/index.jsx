import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupRequestThunk } from "../../store/modules/groupReduce/thunk";

import { getOneGroup } from "../../utils/getOneGroup";

import GroupList from "../../components/Groups/GroupList";
import OneGroup from "../../components/OneGroup/index";

import { Container, ImgBand } from "./style";
import { useState } from "react";

const Group = () => {
  const changeReduce = useSelector((state) => state.groupIDReducer.change);
  const group = useSelector((state) => state.groupIDReducer.groupData);

  const [showOneGroup, setShowOneGroup] = useState(false);
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(groupRequestThunk());
  }, []);

  useEffect(() => {
    dispatch(groupRequestThunk());
  }, [changeReduce]);

  const handleId = (id) => {
    getOneGroup(id, setUserData, showOneGroup, setShowOneGroup);
  };

  return (
    <ImgBand>
      {!showOneGroup && (
        <Container>
          <GroupList items={group} handleId={handleId} />
        </Container>
      )}

      {showOneGroup && (
        <OneGroup
          userData={userData}
          showOneGroup={showOneGroup}
          setShowOneGroup={setShowOneGroup}
        />
      )}
    </ImgBand>
  );
};

export default Group;
