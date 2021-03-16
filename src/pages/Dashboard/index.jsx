import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";

import { Container } from "./style";

import { useDispatch } from "react-redux";
import { requestHabitThunk } from "../../store/modules/habitReduce/thunk";
// import { UserGroupThunk } from "../../store/modules/userGroup/thunks";

import HabitsList from "../../components/PersonalHabits/HabitsList";
import CreateHabit from "../../components/CreateHabit/index";
import jwtDecode from "jwt-decode";

import GroupList from "../../components/Groups/GroupList";

const Dashboard = () => {
  const [groupID, setGroupID] = useState(null);
  const [userGroup, setUserGroup] = useState([]);

  console.log(userGroup);
  console.log(groupID);

  const userPersonalHabits = useSelector(
    (state) => state.changeHabitReduce.userData
  );

  // const getGroupUser = useSelector((state) => state.UserGroupReducer.userGroup);
  // console.log(getGroupUser);

  const token = useSelector((state) => state.signInReducer.token);
  const decoded = jwtDecode(token);

  const changeReduce = useSelector((state) => state.changeHabitReduce.change);

  const dispatch = useDispatch();

  // console.log(groupID);

  async function loadGroups() {
    await api
      .get("/groups/")
      .then((response) => response.data.results)
      .then((response) => {
        // console.log(response); Ja consigo pegar a categoria para filtragem
        response
          .filter((group) => group.id === groupID)
          .map((group) => setUserGroup(group));
        response
          .filter((groups) => groups.category === "Musica")
          .map((groups) => console.log(groups));
      })

      .catch((e) => console.log(e));
  }

  async function getUser() {
    await api
      .get(`/users/${decoded.user_id}/`)
      .then((response) => setGroupID(response.data.group));
    // dispatch(UserGroupThunk(groupID));
  }

  // function getUserGroup() {
  //   console.log("entrou");
  //   const Usergroup = api.get(`/groups/${groupID}`);
  //   setUserGroup(Usergroup);
  // }
  useEffect(() => {
    getUser();
    if (groupID) {
      loadGroups();
    }

    // if (!!groupID) {
    //   dispatch(UserGroupThunk(groupID));
    //   setUserGroup(getGroupUser);
    //   console.log("saiu");
    // }
    // eslint-disable-next-line
  }, [groupID]);

  useEffect(() => {
    dispatch(requestHabitThunk());
    // eslint-disable-next-line
  }, [changeReduce]);

  // useEffect(() => {}, [userGroup]);

  return (
    <div>
      {userGroup ? (
        <div>Você faz parte do grupo de {userGroup.name}</div>
      ) : (
        <>
          <div>Você não faz parte de nenhum grupo.</div>
          <button>Ver grupos disponíveis</button>
        </>
      )}
      <Container>
        <HabitsList items={userPersonalHabits} />
        <CreateHabit />
        {/* <GroupList /> */}
      </Container>
    </div>
  );
};

export default Dashboard;
