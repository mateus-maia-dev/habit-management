import {
  CardContainer,
  CardHeader,
  CardList,
  PageWrapper,
  Graph,
} from "./styles";

import { useHistory } from "react-router-dom";

import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

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

const OneGroup = () => {
  const history = useHistory();

  const groupData =
    useSelector((state) => state.getOneGroupReducer.groupData) || {};
  const activities = groupData.activities;
  const goals = groupData.goals;

  return (
    <PageWrapper>
      <h1>{groupData.name}</h1>
      <span>
        <CardContainer>
          <CardHeader>
            <h6>{groupData.users.length} inscritos </h6>
            <p>{groupData.description}</p>
          </CardHeader>

          <h2>metas</h2>

          {groupData.goals.map((goal, index) => (
            <CardList key={index}>
              <p>{goal.title} </p>
              <span>
                <p>Dificuldade:</p>
                <p>{goal.difficulty} </p>
              </span>
              <span>
                <p>Progresso: </p>
                <p>{goal.how_much_achieved}</p>
              </span>
            </CardList>
          ))}
        </CardContainer>

        <Graph>
          <Doughnut data={data} />
        </Graph>
      </span>
      <button onClick={() => history.push("/groups")}>Voltar</button>
    </PageWrapper>
  );
};

export default OneGroup;
