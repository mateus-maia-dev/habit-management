import { useSelector } from "react-redux";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";

//Se a rota for privada e o usuário não está logado ele vai pro Login
//Se a rota for privada e o usuário está logado, ele vai para a rota
//Se a rota não for privada e o usuário não está logado, ele vai para a rota
//Se a rota não for privada e o usuário está logado, ele permanece no dashboard

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  //   const { token } = useSelector((state) => state.user);

  return (
    <ReactDOMRoute
      {...rest}
      render={() =>
        isPrivate ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? "/" : "dashboard" }} />
        )
      }
    />
  );
};
