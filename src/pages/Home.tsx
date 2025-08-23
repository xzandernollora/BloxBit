import { Player } from "@lottiefiles/react-lottie-player";
import Hero from "../components/Hero";
import Market from "../components/Market";
import Navbar from "../components/Navbar";
import ChooseUs from "../components/ChooseUs";
import Joinus from "../components/Joinus";

const Home = () => {
  return (
    <div className="relative">
      <Player
        autoplay
        loop
        src="https://lottie.host/9d305ad9-e3b9-4df7-a533-0073a8d8f676/dbEaXOQ1X2.json"
        className="absolute top-[190px] md:top-[180px] md:left-[100px] w-20 h-20 md:w-48 md:h-48"
      />

      <Player
        autoplay
        loop
        src="https://lottie.host/6a974c4c-5aee-46e5-b254-19b265279515/Q6V6y6qXYe.json"
        className="absolute right-0 top-[190px] md:bottom-[400px] md:right-[100px] w-20 h-20 md:w-[200px] md:h-[600px]"
      />

      <Player
        autoplay
        loop
        src="https://lottie.host/4927581a-df4e-48f7-a3ab-a7e71c8fc84e/1aFMOFuaRm.json"
        className="absolute right-0 bottom-0 w-20 h-20 md:w-[500px] md:h-[600px]"
      />

      <Player
        autoplay
        loop
        src="https://lottie.host/af9d8af4-4cac-4dec-bfa1-9652dd2c456d/JfgCD3U6CD.json"
        className="absolute left-0 bottom-0 w-20 h-20 md:w-[400px] md:h-[500px]"
      />

      <Navbar />
      <Hero />
      <Market />
      <ChooseUs />
      <Joinus />
    </div>
  );
};

export default Home;
