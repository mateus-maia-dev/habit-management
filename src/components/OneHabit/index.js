import { CardContainer, CardList, PageWrapper, Graph } from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: [],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#bc494c", "#494f56"],
      hoverBackgroundColor: [],
    },
  ],
};

const tokenTempParaTest =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE1NzI4MTA0LCJqdGkiOiIyYmIxNzRjOWYwOGI0NWFkOTVlZTIyMmFkYzUwZDNhZSIsInVzZXJfaWQiOjR9.hwj93WWyyXQqMkHIB_pAEFUO41V068hyYPYazO9tcgk";

const OneHabit = () => {
  const [habit, setHabit] = useState({});

  const getOneHabit = () => {
    api
      .get("/habits/1/", {
        headers: {
          Authorization: `Bearer ${tokenTempParaTest}`,
        },
      })
      .then((response) => setHabit(response.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getOneHabit();
  }, []);

  //   console.log(habit);

  return (
    <PageWrapper>
      <h1>{habit.title}</h1>
      <span>
        <CardContainer>
          <CardList>
            <span>
              <p>Dificuldade:</p>
              <p>{habit.difficulty} </p>
            </span>

            <span>
              <p>Frequência:</p>
              <p>{habit.frequency} </p>
            </span>
            <span>
              <p>Progresso: </p>
              <p>{habit.achieved}</p>
            </span>
          </CardList>
        </CardContainer>

        <Graph>
          <Doughnut data={data} />
        </Graph>
      </span>
    </PageWrapper>
  );
};

export default OneHabit;
