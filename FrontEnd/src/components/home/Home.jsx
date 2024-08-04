// import About from "../about/About";
import Youtube from "../youtube/Youtube";
import Slider from "../slider/Slider";
import GemstoneItems from "../gemstonItems/GemstoneItems";
import IndustrialItems from "../industrialItems/IndustrialItems";
import Features from "../Features/Features";
import { motion } from "framer-motion";
import ProductInfo from "../ProductInfo/ProductInfo";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Mercygem, Home</title>
            <meta name="description" content=" Mercy Gem is a renowned supplier of exquisite gemstones and minerals,
            specializing in sourcing from the rich and diverse mines of
            Ethiopia. With a deep appreciation for the natural wonders found in
            this region, we are committed to offering a curated selection of
            high-quality gemstones that showcase the unique beauty and cultural
            heritage of Ethiopia." />
        </Helmet>
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
      <ProductInfo />
      <GemstoneItems />

      <IndustrialItems />
      {/* <About /> */}
      <Youtube />
    </div>
  );
};

export default Home;
