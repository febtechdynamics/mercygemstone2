import About from "../about/About";
import Youtube from "../youtube/Youtube";
import Slider from "../slider/Slider";
import GemstoneItems from "../gemstonItems/GemstoneItems";
import IndustrialItems from "../industrialItems/IndustrialItems";

const Home = () => {
  return (
    <div>
      <Slider />
      <GemstoneItems />
      <IndustrialItems />
      <About />
      <Youtube />
    </div>
  );
};

export default Home;
