import {
  FaDiscord,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";

const Joinus = () => {
  return (
    <div className="w-full min-h-screen max-w-6xl mx-auto py-16 text-white flex flex-col items-center justify-center px-24">
      {/* Row with Lottie and Titles */}
      <div className="gap-16 flex flex-col items-center justify-center">
        <div className="flex items-center gap-10">
          {/* Left Lottie */}
          <Player
            autoplay
            loop
            src="https://lottie.host/245529ba-186a-400e-b8ba-9c45471861d8/jl1wJAArXM.json"
            className="w-24 h-24"
          />

          {/* Titles */}
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-center">
              JOIN US VIA
            </h2>
            <h1 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              DISCORD
            </h1>
          </div>

          {/* Right Lottie */}
          <Player
            autoplay
            loop
            src="https://lottie.host/245529ba-186a-400e-b8ba-9c45471861d8/jl1wJAArXM.json"
            className="w-24 h-24"
          />
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-300 max-w-md text-center">
          Connect with our community, chat with others, and stay updated by
          joining us on Discord.
        </p>

        {/* Join Discord Button */}
        <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold flex items-center gap-2">
          <FaDiscord className="text-2xl" />
          JOIN DISCORD
        </button>
      </div>

      {/* Socials */}
      <div className="flex gap-6 mt-10 text-2xl">
        <a href="#" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-blue-500">
          <FaFacebook />
        </a>
        <a href="#" className="hover:text-sky-400">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-red-500">
          <FaYoutube />
        </a>
      </div>

      {/* Footer Links */}
      <div className="flex gap-6 mt-8 text-gray-400 text-sm">
        <a href="#" className="hover:text-white">
          Privacy
        </a>
        <a href="#" className="hover:text-white">
          Terms of Use
        </a>
      </div>
    </div>
  );
};

export default Joinus;
