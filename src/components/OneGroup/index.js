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
  return (
    <div className="bgBand">
      <Title>
        <h1>gruop.name</h1>
      </Title>
      <DisplayF>
        <Graph>
          <Doughnut data={data} />
          <br></br>
          <span>
            <h3>
              Progresso:<span>14%</span>{" "}
            </h3>
          </span>
        </Graph>
        <PageWrapper>
          <span>
            <CardContainer>
              <CardHeader>
                <h5>
                  group.users.length <span>inscritos</span>
                </h5>
                <p>group.description</p>
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
              <CardList>
                <p>goal.title </p>
                <span>
                  <p>Dificuldade:</p>
                  <p>realization_time </p>
                </span>
              </CardList>
            </CardContainer>
          </span>
        </PageWrapper2>

        <PageWrapper2>
          <span>
            <CardContainer>
              <CardHeader>
                <h2>metas</h2>
              </CardHeader>
              <CardList>
                <p>goal.title </p>
                <span>
                  <p>Dificuldade:</p>
                  <p>goal.difficulty </p>
                </span>
                <span>
                  <p>Progresso: </p>
                  <p>goal.how_much_achieved</p>
                </span>
              </CardList>
            </CardContainer>
          </span>
        </PageWrapper2>
      </DisplayF>
    </div>
  );
};

export default OneGroup;
