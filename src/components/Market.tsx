import { useEffect, useState } from "react";
import { fetchCoins } from "../../api/coingecko";
import arrow from "../assets/images/arrowbutton.png";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  image: string;
}

const Market = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [page, setPage] = useState(1);

  const totalPages = 50; // adjust as needed
  const pageWindow = 5; // number of page buttons to show

  useEffect(() => {
    const getCoins = async () => {
      const data = await fetchCoins(page);
      setCoins(data);
    };
    getCoins();
  }, [page]);

  const handlePageClick = (pageNum: number) => setPage(pageNum);

  // Jump page window by 5 pages
  const handleNextWindow = () => {
    const nextWindowStart = startPage + pageWindow;
    setPage(Math.min(nextWindowStart, totalPages));
  };

  const handlePrevWindow = () => {
    const prevWindowStart = startPage - pageWindow;
    setPage(Math.max(prevWindowStart, 1));
  };

  // calculate visible page numbers
  const startPage = Math.floor((page - 1) / pageWindow) * pageWindow + 1;
  const endPage = Math.min(startPage + pageWindow - 1, totalPages);
  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) visiblePages.push(i);

  return (
    <section
      id="market"
      className="w-full md:w-[1100px] mx-auto py-16 px-2 text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-left mb-12 font-kanit">
        MARKET UPDATE
      </h1>

      <div className="overflow-x-auto w-full">
        <table className="min-w-[600px] md:min-w-full border-white border rounded-xl text-left border-collapse overflow-hidden">
          <thead className="bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#FFA500] text-black rounded-tl-xl rounded-tr-xl">
            <tr className="border-b border-gray-600">
              <th className="px-2 py-2 text-sm md:text-2xl">Coin</th>
              <th className="px-2 py-2 text-sm md:text-2xl">Price (USD)</th>
              <th className="px-2 py-2 text-sm md:text-2xl">24h Change</th>
              <th className="px-2 py-2 text-sm md:text-2xl">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr
                key={coin.id}
                className="border-b border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <td className="px-2 py-2 flex items-center gap-2 text-sm md:text-lg">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-5 h-5 md:w-20 md:h-20 rounded-full"
                  />
                  {coin.name} ({coin.symbol.toUpperCase()})
                </td>
                <td className="px-2 py-2 text-sm md:text-lg">
                  ${coin.current_price.toLocaleString()}
                </td>
                <td
                  className={`px-2 py-2 font-bold text-sm md:text-lg ${
                    coin.price_change_percentage_24h >= 0
                      ? "text-green-400"
                      : "text-red-600"
                  }`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="px-2 py-2 text-sm md:text-base">
                  ${coin.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2 text-black">
        {/* Prev Window */}
        {startPage > 1 && (
          <button
            className="w-6 h-10 rounded-full text-white flex items-center justify-center"
            onClick={handlePrevWindow}
          >
            <img src={arrow} className="rotate-[180deg] h-6 w-6" />
          </button>
        )}

        {/* Page Numbers */}
        {visiblePages.map((p) => (
          <button
            key={p}
            className={`w-10 h-10 rounded-lg flex items-center text-lg font-kanit justify-center font-bold text-white transition-transform duration-500 
        ${
          page === p
            ? "bg-gray-700 -translate-y-2"
            : "hover:-translate-y-2 hover:bg-gray-700"
        }`}
            onClick={() => handlePageClick(p)}
          >
            {p}
          </button>
        ))}

        {/* Next Window */}
        {endPage < totalPages && (
          <button
            className="w-6 h-10 rounded-full text-white flex items-center justify-center"
            onClick={handleNextWindow}
          >
            <img src={arrow} className="h-6 w-6" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Market;
