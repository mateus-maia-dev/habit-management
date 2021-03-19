import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import {
  Container,
  HeaderLine,
  CardContainer,
  ContentCard,
  ImgDashboard,
  Greetings,
} from "./style";
import { useDispatch } from "react-redux";
import { requestHabitThunk } from "../../store/modules/habitReduce/thunk";

import { getOneHabit } from "../../utils/getOneHabit";
import { getOneGroup } from "../../utils/getOneGroup";

import HabitsList from "../../components/PersonalHabits/HabitsList";
import CreateHabit from "../../components/CreateHabit/index";
import jwt_decoded from "jwt-decode";

import Habit from "../Habit/index";
import OneGroupPage from "../../components/OneGroupPage/index";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [userHabit, setUserHabit] = useState([]);
  const [showOneHabit, setShowOneHabit] = useState(false);
  const [showMygroup, setShowMygroup] = useState(false);

  const [userData, setUserData] = useState([]);
  const [groups, setGroups] = useState([]);

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

  const handleId = (id) => {
    getOneHabit(id, setUserHabit, showOneHabit, setShowOneHabit);
  };

  const handleId2 = (id) => {
    getOneGroup(id, setUserHabit, showMygroup, setShowMygroup);
  };

  return (
    <>
      {!showOneHabit && (
        <ImgDashboard>
          <Container>
            <Greetings>
              Bem-vindo &ensp;<span>{userData.username}</span>{" "}
            </Greetings>
            <HeaderLine>
              <h1>MEUS HÁBITOS</h1>
              <CreateHabit />
            </HeaderLine>
            <HabitsList items={userPersonalHabits} handleId={handleId} />

            <HeaderLine>
              <h1>MEUS GRUPOS</h1>

              <button onClick={() => history.push("/groups")}>
                Pesquisar grupos
              </button>
            </HeaderLine>

            {userData.group && (
              <CardContainer>
                <ContentCard>
                  <h2>{myGroup.name}</h2>
                  <p>{myGroup.description}</p>
                  <p>{myGroup.users && myGroup.users.length} usuários</p>
                  <p>{myGroup.goals && myGroup.goals.length} metas</p>
                  <button onClick={() => handleId2(myGroup.id)}>Grupo</button>
                </ContentCard>
              </CardContainer>
            )}
            {!userData.group && <div>Nao Tem Grupo</div>}
          </Container>
        </ImgDashboard>
      )}

      {showOneHabit && (
        <Habit
          userHabit={userHabit}
          showOneHabit={showOneHabit}
          setShowOneHabit={setShowOneHabit}
        />
      )}

      {showMygroup && (
        <OneGroupPage
          userData={myGroup}
          setUserData={setMyGroup}
          showOneGroup={showMygroup}
          setShowOneGroup={setShowMygroup}
        />
      )}
    </>
  );
};
export default Dashboard;
