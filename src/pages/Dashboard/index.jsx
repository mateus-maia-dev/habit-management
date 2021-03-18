import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { userGroupRequestThunk } from "../../store/modules/groupReduce/thunk";

import { Container, HeaderLine, CardContainer, ContentCard } from "./style";

import { useDispatch } from "react-redux";
import { requestHabitThunk } from "../../store/modules/habitReduce/thunk";

import HabitsList from "../../components/PersonalHabits/HabitsList";
import CreateHabit from "../../components/CreateHabit/index";
import jwt_decoded from "jwt-decode";

import OneGroup from "../../components/OneGroup";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState([]);
  // const [groups, setGroups] = useState([]);
  const [myGroup, setMyGroup] = useState([]);
  console.log(userData);
  // console.log(myGroup);

  const token = useSelector((state) => state.signInReducer);
  const decoded = jwt_decoded(token.token);

  // const group = useSelector((state) => state.groupIDReducer);

  // console.log(group);

  const history = useHistory();

  const handleUserData = () => {
    api
      .get(`/users/${decoded.user_id}/`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => setUserData(response.data));

    // dispatch(userGroupRequestThunk(userData))
  };

  const userPersonalHabits = useSelector(
    (state) => state.changeHabitReduce.userData
  );

  const changeReduce = useSelector((state) => state.changeHabitReduce.change);

  async function getUserGroup() {
    await api
      .get(`/groups/${userData.group}/`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => setMyGroup(response.data));
  }

  useEffect(() => {
    console.log("entrou1");
    dispatch(requestHabitThunk());
    handleUserData();
    console.log(userData.group);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("entrou2");

    dispatch(requestHabitThunk());
  }, [changeReduce]);

  useEffect(() => {
    console.log("entrou3");
    if (!!userData.group) {
      getUserGroup();
    }

    // dispatch(userGroupRequestThunk(userData));

    // eslint-disable-next-line
  }, [userData]);

  return (
    // <Container>
    //   <HabitsList items={userPersonalHabits} />
    //   <CreateHabit />
    //   {/* <GroupList /> */}
    //   {userData.group && <div>Tem Grupo</div>}
    //   {!userData.group && <div>Nao Tem Grupo</div>}
    // </Container>
    <div className="bgGuitar">
      <Container>
        <HeaderLine>
          <h1>MEUS HÁBITOS</h1>
          <CreateHabit />
        </HeaderLine>
        <HabitsList items={userPersonalHabits} />

        <HeaderLine>
          <h1>MEUS GRUPOS</h1>

          <button onClick={() => history.push("/groups")}>
            Pesquisar grupos
          </button>
        </HeaderLine>

        {userData.group ? (
          <CardContainer>
            <ContentCard>
              <h2>{myGroup.name}</h2>
              <p>{myGroup.description}</p>
              {/* <p>{myGroup.users.length} usuários</p>
              <p>{myGroup.goals.length} metas</p> */}
            </ContentCard>
          </CardContainer>
        ) : (
          <div>Nao Tem Grupo</div>
        )}

        {/* <GroupList /> */}
        {/* <CreateHabit /> */}
        {/* <OneGroup /> */}
      </Container>
    </div>
  );
};

export default Dashboard;
