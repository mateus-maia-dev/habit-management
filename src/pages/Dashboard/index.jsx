import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";

import { Container } from "./style";

import { useDispatch } from "react-redux";
import { requestHabitThunk } from "../../store/modules/habitReduce/thunk";

import HabitsList from "../../components/PersonalHabits/HabitsList";
import CreateHabit from "../../components/CreateHabit/index";

const Dashboard = () => {
  const token = useSelector((state) => state.signInReducer.token);
  // const changeHabit = useSelector((state) => state.changeHabitReduce);
  // const dispatch = useDispatch();
  // console.log(changeHabit);

  const [userPersonalHabits, setUserPersonalHabits] = useState([]);
  //const [change, setChange] = useState(false);

  const requestPersonalHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUserPersonalHabits(response.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    requestPersonalHabits();
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   dispatch(requestHabitThunk(change, setChange));
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   setUserPersonalHabits(changeHabit);
  //   // eslint-disable-next-line
  // }, [change]);

  // useEffect(() => {
  //   requestPersonalHabits();
  //   // eslint-disable-next-line
  // }, [changeHabit]);

  return (
    <Container>
      <HabitsList token={token} items={userPersonalHabits} />
      <CreateHabit />
    </Container>
  );
};

export default Dashboard;
