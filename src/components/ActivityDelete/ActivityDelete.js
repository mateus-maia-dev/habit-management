import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";

const ActivityDelete = ({id}) => {
  const [ tryDelete, setTryDelete ] = useState(false)

  const token = useSelector((state) => state.signInReducer.token);

  const switchTryDelete = () => {setTryDelete(!tryDelete)}

  const deleteActivity = () => {
    switchTryDelete()

    api
      .delete(`/activities/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        {tryDelete ?
        <Button>
            <h1>Você deseja excluir esse objetivo?</h1>
            <div>
                <Button variant="contained" color="default" size="small" type="submit" onClick={() => deleteActivity()}>
                    Sim
                </Button>

                <Button variant="contained" color="default" size="small" type="submit" onClick={() => switchTryDelete()}>
                    Não
                </Button>
            </div>
        </Button>
        :
        <Button variant="contained" color="default" size="small" onClick={() => switchTryDelete()}>
            X
        </Button>
        }
    </div>

  );
};
export default ActivityDelete;
