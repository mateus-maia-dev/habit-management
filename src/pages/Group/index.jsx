import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupRequestThunk } from "../../store/modules/groupReduce/thunk";

import { getOneGroup } from "../../utils/getOneGroup";

import GroupList from "../../components/Groups/GroupList";
import OneGroup from "../../components/OneGroup/index";
import CreateGroup from "../../components/CreateGroup/index";

import { Container, HeaderLine, ImgBand } from "./style";
import { useState } from "react";

const Group = () => {
  const changeReduce = useSelector((state) => state.groupIDReducer.change);
  const group = useSelector((state) => state.groupIDReducer.groupData);
  const [showOneGroup, setShowOneGroup] = useState(false);
  const [userData, setUserData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(groupRequestThunk());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(groupRequestThunk());
    // eslint-disable-next-line
  }, [changeReduce]);

  const handleId = (id) => {
    getOneGroup(id, setUserData, showOneGroup, setShowOneGroup);
  };

  return (
    <ImgBand>
      {!showOneGroup && (
        <div className="bgGuitar">
          <Container>
            <HeaderLine>
              <h1>GRUPOS DISPONÍVEIS</h1>
              <CreateGroup />
            </HeaderLine>
            <GroupList items={group} handleId={handleId} />
          </Container>
        </div>
      )}

      {showOneGroup && (
        <OneGroup
          userData={userData}
          setUserData={setUserData}
          showOneGroup={showOneGroup}
          setShowOneGroup={setShowOneGroup}
        />
      )}
    </ImgBand>
  );
};

export default Group;
