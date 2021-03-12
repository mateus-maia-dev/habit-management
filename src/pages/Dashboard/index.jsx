import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";

import { Container } from "./style";

import HabitsList from "../../components/PersonalHabits/HabitsList";
import CreateHabit from "../../components/CreateHabit/index";

const Dashboard = () => {
  const token = useSelector((state) => state.signInReducer.token);
  const changeHabit = useSelector((state) => state.changeHabitReduce);

  const [userPersonalHabits, setUserPersonalHabits] = useState([]);

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
  }, []);

  useEffect(() => {
    requestPersonalHabits();
  }, [changeHabit]);

  return (
    <Container>
      <HabitsList token={token} items={userPersonalHabits} />
      <CreateHabit />
    </Container>
  );
};

export default Dashboard;
