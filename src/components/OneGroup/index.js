import {
  CardContainer,
  CardHeader,
  CardList,
  PageWrapper,
  Graph,
  DisplayF,
  PageWrapper2,
  Title,
} from "./styles";

import { useState, useEffect } from "react";

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

const OneGroup = ({ userData, showOneGroup, setShowOneGroup }) => {
  //const [userData, setUserData] = useState([]);

  useEffect(() => {
    //getOneGroup(userId);new Date(item.realization_time
  }, []);

  const activities = userData.activities.map((item) => ({
    group: item.group,
    id: item.id,
    realization_time: new Date(item.realization_time).toDateString(),
    title: item.title,
  }));

  // console.log(activities);
  // console.log(userData);

  return (
    <div className="bgBand">
      <Title>
        <h1>{userData.name}</h1>
      </Title>
      <DisplayF>
        <Graph>
          <Doughnut data={data} />
          <br></br>
          <span>
            <h3>
              Progresso:<span>14%</span>
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
    </div>
  );
};

export default OneGroup;
