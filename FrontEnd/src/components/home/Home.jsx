import About from "../about/About";
import Client from "../client/Client";
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
      <Client />
    </div>
  );
};

export default Home;
