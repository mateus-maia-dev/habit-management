<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 2144f8758773e2a9dbc1b981db9fd07a6d8971a6
import { useSelector } from "react-redux";
import api from "../../services/api";

import { Container } from "./style";

import { useDispatch } from "react-redux";
import { requestHabitThunk } from "../../store/modules/habitReduce/thunk";

import HabitsList from "../../components/PersonalHabits/HabitsList";
import CreateHabit from "../../components/CreateHabit/index";
import jwtDecode from "jwt-decode";

import jwt_decoded from "jwt-decode";
import api from "../../services/api";

//import GroupList from "../../components/Groups/GroupList";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState([]);

  const token = useSelector((state) => state.signInReducer);
  const decoded = jwt_decoded(token.token);
  // console.log(userData);
  // console.log(decoded.user_id);

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

  const token = useSelector((state) => state.signInReducer.token);
  const decoded = jwtDecode(token);

  const changeReduce = useSelector((state) => state.changeHabitReduce.change);

  useEffect(() => {
    dispatch(requestHabitThunk());
    handleUserData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(requestHabitThunk());
  }, [changeReduce]);

  return (
    <Container>
      <HabitsList items={userPersonalHabits} />
      <CreateHabit />
      {/* <GroupList /> */}
      {userData.group && <div>Tem Grupo</div>}
      {!userData.group && <div>Nao Tem Grupo</div>}
    </Container>
  );
};

export default Dashboard;
