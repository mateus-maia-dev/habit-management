import {
  CardContainer,
  CardHeader,
  CardList,
  PageWrapper,
  Graph,
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

const token = localStorage.getItem("token");

const OneGroup = () => {
  const [group, setGroup] = useState({});

  const { groupID } = useSelector();

  const getOneGroup = () => {
    api
      .get(`/groups/${groupID}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGroup(response.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getOneGroup();
  }, []);

  console.log(group);

  return (
    <PageWrapper>
      <h1>{group.name}</h1>
      <span>
        <CardContainer>
          <CardHeader>
            <h6>{group.users.length} inscritos </h6>
            <p>{group.description}</p>
          </CardHeader>

          <h2>metas</h2>

          {group.goals.map((goal, index) => (
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
    </PageWrapper>
  );
};

export default OneGroup;
