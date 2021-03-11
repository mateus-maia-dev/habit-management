import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";

import HabitsList from "../../components/PersonalHabits/HabitsList";

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
      .then((response) => setUserPersonalHabits(response))
      .catch((e) => console.log(e));
  }, []);

  console.log(userPersonalHabits);

  return (
    <div>{/* <HabitsList token={token} items={userPersonalHabits} /> */}</div>
  );
};

export default Dashboard;
