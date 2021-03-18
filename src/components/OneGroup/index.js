import {
  CardContainer,
  CardHeader,
  CardList,
  PageWrapper,
  Graph,
  DisplayF,
  PageWrapper2,
  Title,
  ImgOnegruop,
  Heigth,
} from "./styles";

import { useState, useEffect } from "react";

import { Doughnut } from "react-chartjs-2";

const OneGroup = ({ userData, showOneGroup, setShowOneGroup }) => {
  // const [ totalGoal, setTotalGoal ] = useState([]);

  // useEffect(() => {
  //   getOneGroup(userId);new Date(item.realization_time)
  // }, []);
  const totalGoal = userData.goals.reduce(
    (acumulator, item) => acumulator + item.how_much_achieved,
    0
  );
  const goalPercentage =
    userData.goals.length != 0 ? totalGoal / userData.goals.length : 0;

  const data = {
    labels: ["Concluido", "Não concluido"],
    datasets: [
      {
        data: [goalPercentage, 100 - goalPercentage],
        backgroundColor: ["#bc494c", "#494f56"],
        hoverBackgroundColor: [],
      },
    ],
  };

  const activities = userData.activities.map((item) => ({
    group: item.group,
    id: item.id,
    realization_time: new Date(item.realization_time).toDateString(),
    title: item.title,
  }));

  return (
    <ImgOnegruop>
      <Heigth>
        <Title>
          <h1>{userData.name}</h1>
        </Title>
        <DisplayF>
          <Graph>
            <Doughnut data={data} />
            <br></br>
            <span>
              <h3>
                Progresso:<span>{goalPercentage+"%"}</span>
              </h3>
            </span>
          </Graph>
          <PageWrapper>
            <span>
              <CardContainer>
                <CardHeader>
                  <h5>
                    {userData.users.length} <span>inscritos</span>
                  </h5>
                  <p>{userData.description}</p>
                </CardHeader>
              </CardContainer>
            </span>
          </PageWrapper>
        </DisplayF>
        <DisplayF>
          <PageWrapper2>
            <span>
              <CardContainer>
                <CardHeader>
                  <h2>Atividades Realizadas</h2>
                </CardHeader>
                {activities.map((item, index) => (
                  <CardList key={index}>
                    <p>{item.title}</p>
                    <span>
                      <p>{item.realization_time}</p>
                    </span>
                  </CardList>
                ))}
              </CardContainer>
            </span>
          </PageWrapper2>

          <PageWrapper2>
            <span>
              <CardContainer>
                <CardHeader>
                  <h2>Metas</h2>
                </CardHeader>
                {userData.goals.map((item, index) => (
                  <CardList key={index}>
                    <p>{item.title}</p>
                    <span>
                      <p>Dificuldade: {item.difficulty}</p>
                    </span>
                    <span>
                      <p>Progresso: {item.how_much_achieved}</p>
                    </span>
                  </CardList>
                ))}
              </CardContainer>
            </span>
          </PageWrapper2>
        </DisplayF>
        <button onClick={() => setShowOneGroup(!showOneGroup)}>Voltar</button>
      </Heigth>
    </ImgOnegruop>
  );
};

export default OneGroup;
