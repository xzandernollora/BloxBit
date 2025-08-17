import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import discordIcon from "../assets/images/discord.png";
import xIcon from "../assets/images/twitter.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:w-[1100px] px-6 py-4 flex mx-auto items-center justify-between relative">
      {/* Logo */}
      <div className="text-2xl font-[900] flex items-center font-kanit">
        <span className="text-white flex items-center">
          BL
          <Player
            autoplay
            loop
            src="https://lottie.host/0480ce36-508d-4dda-8238-84a4da4b224f/PMiDrCRcF9.json"
            className="w-10 h-10 mx-1 hover:scale-110"
          />
          XBIT
        </span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex text-lg space-x-8 text-white font-bold font-googleSansCode">
        <li className="hover:text-yellow-500 cursor-pointer">Home</li>
        <li className="hover:text-yellow-500 cursor-pointer">Market</li>
        <li className="hover:text-yellow-500 cursor-pointer">Choose us</li>
        <li className="hover:text-yellow-500 cursor-pointer">Join</li>
      </ul>

      {/* Desktop Social Buttons */}
      <div className="hidden md:flex">
        <button className="p-2 rounded hover:scale-110">
          <img src={discordIcon} alt="Discord" className="w-8 h-8" />
        </button>
        <button className="p-2 rounded hover:scale-110">
          <img src={xIcon} alt="Twitter" className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 right-4 text-white p-2 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          key={isOpen ? "close" : "menu"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.div>
      </button>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-8 font-bold font-googleSansCode md:hidden z-40 overflow-y-auto"
          >
            <li className="hover:text-yellow-500 text-2xl cursor-pointer">
              Home
            </li>
            <li className="hover:text-yellow-500 text-2xl cursor-pointer">
              Market
            </li>
            <li className="hover:text-yellow-500 text-2xl cursor-pointer">
              Choose us
            </li>
            <li className="hover:text-yellow-500 text-2xl cursor-pointer">
              Join
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
