import { Switch } from "react-router-dom";
import { Route } from "./route";
//import { AnimatePresence } from "framer-motion";

//Importação dos components
import Dashboard from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import Registro from "../pages/Registro/index";
import Group from "../pages/Group/index";
//import Home from "../pages/Home";
import Habit from "../pages/Habit/index";
import LandingPage from "../pages/LandingPage/index";
import UserConfiguration from "../pages/UserConfiguration/index";
import OneGroup from "../components/OneGroup";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Registro} />
      <Route
        path="/configuration"
        exact
        component={UserConfiguration}
        isPrivate
      />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/onegroup" exacat component={OneGroup} isPrivate />
      <Route path="/groups" exact component={Group} isPrivate />
      <Route path="/habit" exact component={Habit} isPrivate />
      {/* <Route path='/' exact component={Groups}/> */}
    </Switch>
    //   <AnimatePresence>
    // </AnimatePresence>
  );
};
