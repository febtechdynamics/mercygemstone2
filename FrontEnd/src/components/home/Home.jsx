import About from "../about/About";
import Youtube from "../youtube/Youtube";
import Slider from "../slider/Slider";
import GemstoneItems from "../gemstonItems/GemstoneItems";
import IndustrialItems from "../industrialItems/IndustrialItems";
import ProductCard from "../ProductCard/ProductCard";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div>
      <Slider />

      <Features />
      <GemstoneItems />
      <IndustrialItems />
      {/* <About /> */}
      <Youtube />
    </div>
  );
};

export default Home;
