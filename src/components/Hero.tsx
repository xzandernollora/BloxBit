import { useEffect, useState } from "react";
import { fetchCoins } from "../../api/coingecko";

import bitcoin from "../assets/images/bitcoin.png";
import eth from "../assets/images/eth.png";
import tether from "../assets/images/tether.png";
import solana from "../assets/images/solana.png";

interface Coin {
  id: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const featuredCoins = ["bitcoin", "ethereum", "tether", "solana"];

const coinImages: Record<string, string> = {
  bitcoin,
  ethereum: eth,
  tether,
  solana,
};

const Hero = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoins();
      setCoins(data);
    };

    fetchData(); // initial fetch

    const interval = setInterval(fetchData, 30000); // fetch every 30 seconds
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-screen md:w-[1200px] mx-auto py-16 text-white flex flex-col items-center"
    >
      {/* Headings */}
      <div className="text-center mb-12 font-kanit space-y-0 md:space-y-6">
        <h1 className="text-[38px] md:text-8xl font-extrabold">
          TRACK AND TRADE
        </h1>
        <h2
          className="text-[40px] md:text-8xl font-extrabold mt-4
             bg-gradient-to-r from-blue-500 to-purple-500
             bg-clip-text text-transparent"
        >
          CRYPTO CURRENCIES
        </h2>
      </div>

      {/* Crypto Cards */}
      <div className="grid grid-cols-1 px-8 md:px-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
        {featuredCoins.map((id) => {
          const coin = coins.find((c) => c.id === id);
          if (!coin) return null;

          return (
            <div key={coin.id} className="rounded-2xl p-6 text-center">
              <img
                src={coinImages[coin.id]}
                alt={coin.name}
                className="w-30 h-30 mx-auto mb-4 p-8 
           hover:scale-110 hover:backdrop-blur-lg hover:bg-white/10 hover:rounded-full transition-all duration-300"
              />

              <div className="flex items-center justify-center gap-2">
                <h3 className="text-2xl font-bold">{coin.name}</h3>
                <p
                  className={`font-bold text-3xl ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-400"
                      : "text-red-600"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>

              <p className="text-4xl font-semibold mt-2">
                ${coin.current_price.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
