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
import api from "../../services/api";
import { useEffect, useState } from "react";
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

//const token = localStorage.getItem("token");

const OneGroup = () => {
  /*
  const [group, setGroup] = useState({});
<<<<<<< HEAD

  const { groupIDReducer } = useSelector(state => state);

  const getOneGroup = () => {
    api
      .get(`/groups/${groupIDReducer}/`, {
=======
  const groupID = useSelector((state) => state.groupIDReducer);

  const getOneGroup = () => {
    api
      .get(`/groups/3/`, {
>>>>>>> d8898d1acf463c31f8250bd5c2cc306d706b6953
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGroup(response.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getOneGroup();
<<<<<<< HEAD
  }, [groupIDReducer]);

  return (
    <PageWrapper>
      <h1>{group.name}</h1>
      <span>
        <CardContainer>
          <CardHeader>
            <h6>{group.user ? group.users.length : "0"} inscritos </h6>
            <p>{group.description}</p>
          </CardHeader>

          <h2>metas</h2>

          {group.goals && group.goals.map((goal, index) => (
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

=======
  }, []);

  console.log(group);
 */
  return (
    <div className="bgBand">
      <Title>
        <h1>gruop.name</h1>
      </Title>
      <DisplayF>
>>>>>>> d8898d1acf463c31f8250bd5c2cc306d706b6953
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
