import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Container } from "./style";

import { useDispatch } from "react-redux";
import { requestHabitThunk } from "../../store/modules/habitReduce/thunk";

import HabitsList from "../../components/PersonalHabits/HabitsList";
import CreateHabit from "../../components/CreateHabit/index";

const Dashboard = () => {
  const userPersonalHabits = useSelector(
    (state) => state.changeHabitReduce.userData
  );

  const changeReduce = useSelector((state) => state.changeHabitReduce.change);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestHabitThunk());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(requestHabitThunk());
    // eslint-disable-next-line
  }, [changeReduce]);

  return (
    <Container>
      <HabitsList items={userPersonalHabits} />
      <CreateHabit />
    </Container>
  );
};

export default Dashboard;
