import { useState, useEffect } from "react";
import api from "../../services/api";

import HabitsList from "../../components/PersonalHabits/HabitsList";

const Dashboard = () => {
  //Token temporario, para testar a aplicacao
  const tokenTempParaTest =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE1NzI4MTA0LCJqdGkiOiIyYmIxNzRjOWYwOGI0NWFkOTVlZTIyMmFkYzUwZDNhZSIsInVzZXJfaWQiOjR9.hwj93WWyyXQqMkHIB_pAEFUO41V068hyYPYazO9tcgk";

  const [userPersonalHabits, setUserPersonalHabits] = useState([]);

  useEffect(() => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${tokenTempParaTest}`,
        },
      })
      .then((response) => setUserPersonalHabits(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="bgGuitar">
      <HabitsList items={userPersonalHabits} />
    </div>
  );
};

export default Dashboard;
