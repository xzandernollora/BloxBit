const Hero = () => {
  return (
    <section className="w-full md:w-[1100px] mx-auto py-16 text-white flex flex-col items-center">
      {/* Headings */}
      <div className="text-center mb-12 font-googleSansCode space-y-0 md:space-y-6">
        <h1 className="text-[38px] md:text-8xl font-bold">TRACK AND TRADE</h1>
        <h2 className="text-[40px] md:text-8xl font-bold mt-4">
          CRYPTO CURRENCIES
        </h2>
      </div>

      {/* Crypto Cards */}
      <div className="grid grid-cols-1 px-8 md:px-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
        {/* Card 1 */}
        <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
          <img
            src="/btc.png"
            alt="Bitcoin"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">Bitcoin</h3>
          <p className="text-green-400 mt-1">+2.5%</p>
          <p className="text-2xl font-semibold mt-2">$65,000</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
          <img
            src="/eth.png"
            alt="Ethereum"
            className="w-20 h-20 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">Ethereum</h3>
          <p className="text-red-400 mt-1">-1.3%</p>
          <p className="text-2xl font-semibold mt-2">$3,200</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
          <img src="/bnb.png" alt="BNB" className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-xl font-bold">BNB</h3>
          <p className="text-green-400 mt-1">+0.8%</p>
          <p className="text-2xl font-semibold mt-2">$420</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
          <img src="/sol.png" alt="Solana" className="w-20 h-20 mx-auto mb-4" />
          <h3 className="text-xl font-bold">Solana</h3>
          <p className="text-green-400 mt-1">+5.1%</p>
          <p className="text-2xl font-semibold mt-2">$150</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
