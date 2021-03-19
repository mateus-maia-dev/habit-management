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
  lastButton,
} from "./styles";

import { useEffect } from "react";

import api from "../../services/api";

import { useSelector, useDispatch } from "react-redux";

import {
  activitiesDeleteThunk,
  goalsDeleteThunk,
} from "../../store/modules/groupReduce/thunk";

import ActivitiesButtonPost from "../Activities/FormPost/Button";
import ActivitiesButtonPatch from "../Activities/FromPatch/ButtonPatch";
import GoalsButtonPost from "../Goals/FormPost/Button";
import GoalsButtonPatch from "../Goals/FromPatch/ButtonGoals";

import { Doughnut } from "react-chartjs-2";

const OneGroup = ({ userData, setUserData, showOneGroup, setShowOneGroup }) => {
  const dispatch = useDispatch();

  const change = useSelector((state) => state.groupIDReducer.change);

  useEffect(() => {
    const token = localStorage.getItem("token");
    api
      .get(`/groups/${userData.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUserData(response.data))
      .catch((e) => console.log(e));
    // eslint-disable-next-line
  }, [change]);

  const totalGoal = userData.goals.reduce(
    (acumulator, item) => acumulator + item.how_much_achieved,
    0
  );

  const goalPercentage =
    // eslint-disable-next-line
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

  const activitiesHandleDelete = (id) => {
    dispatch(activitiesDeleteThunk(id, userData.id));
  };

  const goalsHandleDelete = (id) => {
    dispatch(goalsDeleteThunk(id, userData.id));
  };

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
                Progresso: <span>{goalPercentage}%</span>
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
                  <ActivitiesButtonPost groupId={userData.id} />
                </CardHeader>
                {activities.map((item, index) => (
                  <CardList key={index}>
                    <p>{item.title}</p>
                    <span>
                      <p>{item.realization_time}</p>
                    </span>
                    <span>
                      <ActivitiesButtonPatch
                        key={index}
                        itemId={item.id}
                        groupId={userData.id}
                      />
                      <button onClick={() => activitiesHandleDelete(item.id)}>
                        Excluir
                      </button>
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
                  <GoalsButtonPost groupId={userData.id} />
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
                    <span>
                      <p>Objetivo Concluído: {item.achieved ? "Sim" : "Não"}</p>
                    </span>
                    <span>
                      <GoalsButtonPatch
                        itemId={item.id}
                        groupId={userData.id}
                      />
                      <button onClick={() => goalsHandleDelete(item.id)}>
                        Excluir
                      </button>
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
