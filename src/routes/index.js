import { Switch, Route } from "react-router-dom";
//import { Route } from "./route";

//Importação dos components
import Dashboard from "../pages/Dashboard/index";
import Login from "../pages/Login/index";
import Registro from "../pages/Registro/index";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/registro" exact component={Registro} />
      {/* <Route path='/' exact component={Home}/>
              <Route path='/' exact component={Groups}/> */}
    </Switch>
  );
};
