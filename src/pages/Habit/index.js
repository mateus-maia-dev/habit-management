import OneHabit from "../../components/OneHabit";
import { ImgBand } from "./style";

const Habit = ({ userHabit, showOneHabit, setShowOneHabit }) => {
  return (
    <ImgBand>
      <OneHabit
        userHabit={userHabit}
        showOneHabit={showOneHabit}
        setShowOneHabit={setShowOneHabit}
      />
    </ImgBand>
  );
};

export default Habit;
