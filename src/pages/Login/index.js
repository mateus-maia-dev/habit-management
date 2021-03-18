import FormLogin from "../../components/FormLogin";
import { Background, ImgLogin } from "../Login/styles";
const Login = () => {
  return (
    <ImgLogin>
      <Background>
        <FormLogin />
      </Background>
    </ImgLogin>
  );
};

export default Login;
