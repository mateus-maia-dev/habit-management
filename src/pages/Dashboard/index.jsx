import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";

import HabitsList from "../../components/PersonalHabits/HabitsList";
import CreateHabit from "../../components/CreateHabit/index";

const Dashboard = () => {
  const token = useSelector((state) => state.signInReducer.token);

  const [userPersonalHabits, setUserPersonalHabits] = useState([]);

  useEffect(() => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }) //Os nossos usuarios estao sem habitos ainda
      .then((response) => setUserPersonalHabits(response.data))
      .catch((e) => console.log(e));
  }, []);

  console.log(userPersonalHabits);

  return (
    <div>
      <HabitsList token={token} items={userPersonalHabits} />
      <CreateHabit />
    </div>
  );
};

export default Dashboard;
