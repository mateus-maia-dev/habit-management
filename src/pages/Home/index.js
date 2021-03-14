import { Container } from "./styles";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>Bem-vindo ao melhor site de gerenciamento de hábito</Container>
    </motion.div>
  );
};

export default Home;
