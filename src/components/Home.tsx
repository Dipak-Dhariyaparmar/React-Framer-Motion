import { motion } from "framer-motion";

const Home = () => {
  return (
    <main>
      <motion.div
        className="card"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        Drag horizontally. (X axis)
      </motion.div>
      <motion.div
        className="card"
        whileHover={{ rotate: `5deg`, scale: 1.5 }}
        drag="y"
      >
        Drag vertically. (Y axis)
      </motion.div>
    </main>
  );
};

export default Home;
// This component is a related home
