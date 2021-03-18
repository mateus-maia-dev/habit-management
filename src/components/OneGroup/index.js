import {
  CardContainer,
  CardHeader,
  CardList,
  PageWrapper,
  Graph,
  DisplayF,
  PageWrapper2,
  Title,
  ButtonDelete,
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
  }, [change]);

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
                    <ButtonDelete
                      onClick={() => activitiesHandleDelete(item.id)}
                    >
                      Excluir
                    </ButtonDelete>
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
                    <GoalsButtonPatch itemId={item.id} groupId={userData.id} />
                    <ButtonDelete onClick={() => goalsHandleDelete(item.id)}>
                      Excluir
                    </ButtonDelete>
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
