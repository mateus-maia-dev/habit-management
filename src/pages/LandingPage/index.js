import {
  BottomBar,
  BottomBarList,
  LandingPageWrapper,
  ImgLandingPage,
} from "./styles";

import GroupIcon from "@material-ui/icons/Group";
import PostAddIcon from "@material-ui/icons/PostAdd";
import BarChartIcon from "@material-ui/icons/BarChart";

const LandingPage = () => {
  return (
    <>
      <ImgLandingPage>
        <LandingPageWrapper>
          <h1>MUSIC HERO</h1>
          <h2>GERENCIE SEUS HÁBITOS</h2>
        </LandingPageWrapper>
      </ImgLandingPage>
      <BottomBar>
        <h2>LEVANDO A MÚSICA AO PRÓXIMO NÍVEL</h2>
        <BottomBarList>
          <div>
            <PostAddIcon />
            <p>Crie hábitos pessoais</p>
          </div>
          <div>
            <GroupIcon />
            <p>Compartilhe metas coletivas</p>
          </div>
          <div>
            <BarChartIcon />
            <p>Monitore seu progresso</p>
          </div>
        </BottomBarList>
      </BottomBar>
    </>
  );
};

export default LandingPage;
