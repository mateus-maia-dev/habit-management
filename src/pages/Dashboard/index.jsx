import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import { Container, HeaderLine, CardContainer, ContentCard } from "./style";

import { useDispatch } from "react-redux";
import { requestHabitThunk } from "../../store/modules/habitReduce/thunk";

import HabitsList from "../../components/PersonalHabits/HabitsList";
import CreateHabit from "../../components/CreateHabit/index";
import jwt_decoded from "jwt-decode";

//import GroupList from "../../components/Groups/GroupList";
import GroupList from "../../components/Groups/GroupList";
import Button from "../../components/Buttons/index";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState([]);
  const [groups, setGroups] = useState([]);

  console.log(groups);

  const token = useSelector((state) => state.signInReducer);
  const decoded = jwt_decoded(token.token);
  // console.log(userData);

  const getGroups = () => {
    api.get("/groups/").then((response) => setGroups(response.data.results));
  };
  const [myGroup, setMyGroup] = useState("");

  const history = useHistory();

  const handleUserData = () => {
    api
      .get(`/users/${decoded.user_id}/`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((response) => setUserData(response.data));
  };

  console.log("myGroup", myGroup);

  const userPersonalHabits = useSelector(
    (state) => state.changeHabitReduce.userData
  );

  const changeReduce = useSelector((state) => state.changeHabitReduce.change);

  useEffect(() => {
    dispatch(requestHabitThunk());
    handleUserData();
    getGroups();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(requestHabitThunk());
  }, [changeReduce]);

  useEffect(() => {
    userData.group &&
      api
        .get(`/groups/${userData.group}/`, {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        })
        .then((response) => setMyGroup(response.data));
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

        {/* {userData.group && (
          <CardContainer>
            <ContentCard>
              <h2>{myGroup.name}</h2>
              <p>{myGroup.description}</p>
              <p>{myGroup.users.length} usuários</p>
              <p>{myGroup.goals.length} metas</p>
            </ContentCard>
          </CardContainer>
        )}
        {!userData.group && <div>Nao Tem Grupo</div>} */}

        {/* <GroupList /> */}
      </Container>
    </div>
  );
};

export default Dashboard;
