import bitcoin from "../assets/images/bitcoin.png";
import eth from "../assets/images/eth.png";
import tether from "../assets/images/tether.png";
import solana from "../assets/images/solana.png";
import { Player } from "@lottiefiles/react-lottie-player";

const ChooseUs = () => {
  const cards = [
    {
      title: "CONNECT YOUR WALLET",
      desc: "Use Trust Wallet, Metamask or to connect to the app.",
      image: bitcoin,
    },
    {
      title: "SELECT YOUR QUANTITY",
      desc: "Upload your crypto and set a title, description and price.",
      image: eth,
    },
    {
      title: "CONFIRM TRANSACTION",
      desc: "Earn by selling your crypto on our marketplace.",
      image: tether,
    },
    {
      title: "RECEIVE YOUR OWN NFTS",
      desc: "Invest all your crypto at one place on one platform.",
      image: solana,
    },
    {
      title: "TAKE A MARKET TO SELL",
      desc: "Discover, collect the right crypto collections to buy or sell.",
      image: bitcoin,
    },
    {
      title: "DRIVE YOUR COLLECTION",
      desc: "We make it easy to Discover, Invest and manage.",
      image: eth,
    },
  ];

  return (
    <section
      id="chooseus"
      className="w-full min-h-screen max-w-6xl mx-auto py-16 px-4"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-40 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        WHY CHOOSE US?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 items-start">
        {/* Left Column Cards */}
        <div className="md:col-span-2 grid gap-10 z-10">
          {cards.slice(0, 3).map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl flex items-center gap-4"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-20 h-20 rounded-xl"
              />
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">
                  {card.title}
                </h3>
                <p className="text-white text-md">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-2 flex justify-center relative">
          <Player
            autoplay
            loop
            className="w-full max-w-[380px] h-[550px] relative  z-10"
            src="https://lottie.host/c59715ef-6952-4369-b17f-5d8796897ad4/mHxfSytkTg.json"
          />
        </div>

        {/* Right Column Cards */}
        <div className="md:col-span-2 grid gap-10 z-10">
          {cards.slice(3, 6).map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-xl flex items-center gap-4"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-20 h-20 rounded-xl"
              />
              <div>
                <h3 className="font-bold text-lg mb-2 text-white">
                  {card.title}
                </h3>
                <p className="text-white text-md">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
