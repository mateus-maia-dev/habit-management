import {
  CardContainer,
  CardList,
  PageWrapper,
  Graph,
  CardHeader,
  Title,
  DisplayF,
  Section,
} from "./styles";

import { Doughnut } from "react-chartjs-2";

const OneHabit = ({ userHabit, showOneHabit, setShowOneHabit }) => {
  //const [habit, setHabit] = useState({});

  // const getOneHabit = () => {
  //   api
  //     .get("/habits/473/", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => setHabit(response.data))
  //     .catch((e) => console.log(e));
  // };

  // useEffect(() => {
  //   getOneHabit();
  // }, []);

  const data = {
    labels: [],
    datasets: [
      {
        data: [
          Number(userHabit.how_much_achieved),
          100 - Number(userHabit.how_much_achieved),
        ],
        backgroundColor: ["#bc494c", "#494f56"],
        hoverBackgroundColor: [],
      },
    ],
  };
  //   console.log(habit);

  return (
    <div className="bgBand">
      <Title>
        <h1>{userHabit.title}</h1>
      </Title>
      <DisplayF>
        <Section>
          <Graph>
            <Doughnut data={data} />
            <br></br>
            <span>
              <h3>
                Progresso: <span>{userHabit.how_much_achieved}%</span>
              </h3>
            </span>
          </Graph>
        </Section>
        <PageWrapper>
          <span>
            <CardContainer>
              <CardHeader>
                <h2>Descrição</h2>
              </CardHeader>
              <CardList>
                <span>
                  <p>Dificuldade:&nbsp; </p>
                  <p>{userHabit.difficulty} </p>
                </span>

                <span>
                  <p>Frequência:&nbsp; </p>
                  <p>{userHabit.frequency} </p>
                </span>
                <span>
                  <p>Concluída:&nbsp; </p>
                  <p>{userHabit.achieved ? "Sim" : "Não"}</p>
                </span>
              </CardList>
            </CardContainer>
          </span>
        </PageWrapper>
        {/* <div className="btn">
          <button>Editar Atividade</button>
        </div> */}
        <div className="btn">
          <button onClick={() => setShowOneHabit(!showOneHabit)}>Voltar</button>
        </div>
      </DisplayF>
    </div>
  );
};

export default OneHabit;
