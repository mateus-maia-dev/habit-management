import { Switch } from "react-router-dom";
import { Route } from "./route";
//import { AnimatePresence } from "framer-motion";

//Importação dos components
import Dashboard from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import Group from "../pages/Group/index";
import Home from "../pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/group" exact component={Group} />
      {/* <Route path='/' exact component={Groups}/> */}
    </Switch>
    //   <AnimatePresence>
    // </AnimatePresence>
  );
};
