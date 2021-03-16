import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Container, HeaderLine } from "./style";

import { useDispatch } from "react-redux";
import { requestHabitThunk } from "../../store/modules/habitReduce/thunk";

import HabitsList from "../../components/PersonalHabits/HabitsList";
import CreateHabit from "../../components/CreateHabit/index";

import GroupList from "../../components/Groups/GroupList";
import Button from "../../components/Buttons/styles";

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
    <div className="bgGuitar">
      <Container>
        <HeaderLine>
          <h1>MEUS HÁBITOS</h1>
          <CreateHabit />
        </HeaderLine>
        <HabitsList items={userPersonalHabits} />

        <GroupList />
      </Container>
    </div>
  );
};

export default Dashboard;
