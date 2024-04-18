import About from "../about/About";
import Youtube from "../youtube/Youtube";
import Slider from "../slider/Slider";
import GemstoneItems from "../gemstonItems/GemstoneItems";
import IndustrialItems from "../industrialItems/IndustrialItems";
import Features from "../Features/Features";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ y: "100vh" }} // Initial position outside the viewport (bottom of the screen)
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          duration: 3,
          stiffness: 120,
          damping: 20,
        }}
      >
        <Slider />
      </motion.div>
      <motion.div
        initial={{ y: "100vh" }} // Initial position outside the viewport (bottom of the screen)
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          duration: 5,
          stiffness: 120,
          damping: 15,
        }}
      >
        <Features />
      </motion.div>
      <GemstoneItems />

      <IndustrialItems />
      {/* <About /> */}
      <Youtube />
    </div>
  );
};

export default Home;
