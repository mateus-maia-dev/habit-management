import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";

import { Container, HeaderLine } from "./style";

import { useDispatch } from "react-redux";
import { requestHabitThunk } from "../../store/modules/habitReduce/thunk";

import HabitsList from "../../components/PersonalHabits/HabitsList";
import CreateHabit from "../../components/CreateHabit/index";
import jwtDecode from "jwt-decode";

import GroupList from "../../components/Groups/GroupList";
import Button from "../../components/Buttons/index";

const Dashboard = () => {
  const [groupID, setGroupID] = useState(null);
  const [userGroup, setUserGroup] = useState([]);

  console.log(userGroup);
  console.log(groupID);

  const userPersonalHabits = useSelector(
    (state) => state.changeHabitReduce.userData
  );

  const token = useSelector((state) => state.signInReducer.token);
  const decoded = jwtDecode(token);

  const changeReduce = useSelector((state) => state.changeHabitReduce.change);

  const dispatch = useDispatch();

  async function loadGroups() {
    await api
      .get("/groups/")
      .then((response) => response.data.results)
      .then((response) => {
        response
          .filter((group) => group.id === groupID)
          .map((group) => setUserGroup(group));
      })

      .catch((e) => console.log(e));
  }

  async function getUser() {
    await api
      .get(`/users/${decoded.user_id}/`)
      .then((response) => setGroupID(response.data.group));
  }

  useEffect(() => {
    getUser();
    if (groupID) {
      loadGroups();
    }
  }, [groupID]);

  useEffect(() => {
    dispatch(requestHabitThunk());
  }, [changeReduce]);

  return (
    <div className="bgGuitar">
      <Container>
        <HeaderLine>
          <h1>MEUS HÁBITOS</h1>
          <CreateHabit />
        </HeaderLine>
        <HabitsList items={userPersonalHabits} />

        <HeaderLine>
          <h1>MEUS GRUPOS</h1>
          <Button icon="add">Pesquisar grupos</Button>
        </HeaderLine>

        {/* <GroupList /> */}
      </Container>
    </div>
  );
};

export default Dashboard;
