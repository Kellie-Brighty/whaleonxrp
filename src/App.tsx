import { motion } from "framer-motion";
import "./App.css";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-[#3BAAFC] min-h-screen">
      {/* Header */}
      {/* Header */}
      <header className="fixed top-0 w-full bg-white bg-opacity-60 text-black py-4 z-10 logo">
        <nav className="mx-auto px-4 lg:px-[100px] flex justify-between items-center">
          <p className={`logo text-2xl sm:text-3xl lg:text-[60px]`}>WHALE</p>
          <div className="lg:hidden">
            {/* Mobile Menu Icon */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-black text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <ul className="hidden lg:flex items-center space-x-4 sm:space-x-6 text-sm sm:text-lg lg:text-[30px]">
            <li>
              <a
                href="https://t.me/whaleonxrp"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                TELEGRAM
              </a>
            </li>
            <li>
              <a
                href="https://x.com/whaleonxrp"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </li>
            <li>
              <a href="https://dexscreener.com/xrpl/5748414c45000000000000000000000000000000.rh2aarcxtxzebf6dprzz2pygqjjancnkyy_xrp" className="hover:underline">
                DEXSCREENER
              </a>
            </li>
          </ul>
          <a
            href="https://firstledger.net/token/rH2AarcXtxzEbf6DprZz2PYGQJjANcnkYy/5748414C45000000000000000000000000000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primaryBG rounded-full cursor-pointer px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-lg text-white hidden lg:block">
              <p className={`logo`}>BUY ON</p>
            </button>
          </a>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-sm sm:text-lg lg:text-[30px]">
              <li>
                <a
                  href="https://t.me/whaleonxrp"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  TELEGRAM
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/whaleonxrp"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  X
                </a>
              </li>
              <li>
                <a href="https://dexscreener.com/xrpl/5748414c45000000000000000000000000000000.rh2aarcxtxzebf6dprzz2pygqjjancnkyy_xrp" className="hover:underline" onClick={toggleMenu}>
                  DEXSCREENER
                </a>
              </li>
              <li>
                <a
                  href="https://firstledger.net/token/rH2AarcXtxzEbf6DprZz2PYGQJjANcnkYy/5748414C45000000000000000000000000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="primaryBG rounded-full cursor-pointer px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-lg text-white"
                    onClick={toggleMenu}
                  >
                    BUY ON
                  </button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-[80px] text-white"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold logo max-w-[600px] mx-auto lg:mx-0 mt-[100px] lg:mt-0">
            THE WHALE RISES AGAIN!
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl montserrat max-w-[600px] mx-auto lg:mx-0">
            $WHALE is here to be the ultimate symbol of the resilience of XRP in
            the face of adversity.
          </p>
        </motion.div>

        <div className={`w-full lg:w-1/2 lg:mt-0 `}>
          <img
            src="/whale.jpg"
            alt="Whale"
            className={`w-full rounded-lg -mt-[50px] lg:mt-0`}
          />
        </div>
      </section>

      {/* Infinite Horizontal Slide Section */}
      <section className="w-full overflow-hidden py-10 bg-white transform rotate-2">
        <div className="flex animate-marquee space-x-8 lg:space-x-[100px]">
          <div className={`flex items-center space-x-2`}>
            <img
              src="/coinmarket.png"
              alt="Image 1"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full"
            />
            <p className={`text-sm sm:text-lg`}>Coinmarketcap</p>
          </div>
          <div className={`flex items-center space-x-2`}>
            <img
              src="/dextools.png"
              alt="Image 2"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full"
            />
            <p className={`text-sm sm:text-lg`}>Dextools</p>
          </div>
          <div className={`flex items-center space-x-2`}>
            <img
              src="/dexscreener.png"
              alt="Image 3"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full"
            />
            <p className={`text-sm sm:text-lg`}>Dexscreener</p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      {/* About Section */}
      <section
        id="about"
        className={`min-h-screen flex items-center justify-center text-center text-white px-4 py-10 primaryBG`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl space-y-6"
        >
          {/* <h2 className="text-3xl lg:text-[80px] font-bold logo">WHY WHALE?!</h2> */}
          <div className="relative group">
            <img
              src="/whale banner.jpg"
              alt="About Us"
              className="transition-transform duration-300 transform group-hover:scale-110 rounded-2xl shadow-lg"
            />
          </div>
          <p className="text-sm lg:text-[30px] rounded-lg">
            Throughout its journey, XRP has conquered the tides of adversity,
            weathering challenges that many believed would sink it. The SEC
            lawsuit was just the latest storm in its path. For many, it seemed
            like the final wave—but they underestimated the power of resilience.
            Now, as XRP rises triumphantly, a new symbol emerges alongside it:
            $WHALE, the embodiment of dominance, strength, and unstoppable
            momentum in the crypto ocean. 🌊
          </p>
        </motion.div>
      </section>

      {/* Endless Memes Section */}

      <section className="w-full overflow-hidden py-10 primaryBG text-white">
        <h2 className="text-3xl lg:text-[80px] font-bold text-center mb-8 logo">
          ENDLESS MEMES
        </h2>
        <div className="space-y-8">
          <div className="flex animate-marquee-right space-x-8 lg:space-x-[100px]">
            <img
              src="/whale 1.jpg"
              alt="Meme 1"
              className="w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
            />
            <img
              src="/whale 2.jpg"
              alt="Meme 2"
              className="w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
            />
            <img
              src="/whale 3.jpg"
              alt="Meme 3"
              className="w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
            />
            <img
              src="/whale 5.jpg"
              alt="Meme 5"
              className="w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
            />
            <img
              src="/whale 1.jpg"
              alt="Meme 6"
              className="w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
            />
          </div>
          <div className="flex animate-marquee-left space-x-8 lg:space-x-[100px]">
            <img
              src="/whale 4.jpg"
              alt="Meme 4"
              className="w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
            />
            <img
              src="/whale 5.jpg"
              alt="Meme 5"
              className="w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
            />
            <img
              src="/whale 1.jpg"
              alt="Meme 6"
              className="w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
            />
            <img
              src="/whale 1.jpg"
              alt="Meme 1"
              className="w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
            />
            <img
              src="/whale 2.jpg"
              alt="Meme 2"
              className="w-32 h-32 lg:w-[300px] lg:h-[300px] object-cover rounded-[12px]"
            />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee-right {
          0% {
        transform: translateX(-100%);
          }
          100% {
        transform: translateX(100%);
          }
        }
        @keyframes marquee-left {
          0% {
        transform: translateX(100%);
          }
          100% {
        transform: translateX(-100%);
          }
        }
        .animate-marquee-right {
          display: flex;
          animation: marquee-right 12s linear infinite;
        }
        .animate-marquee-left {
          display: flex;
          animation: marquee-left 12s linear infinite;
        }
      `}</style>

      {/* How to Buy Section */}
      <section className="w-full py-[150px] primaryBG text-black ">
        <h2 className="text-3xl lg:text-[80px] font-bold text-center mb-8 logo text-white">
          HOW TO BUY
        </h2>
        <div className="flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl lg:text-[60px] logo font-bold">1</div>
            <p className="text-center max-w-xs lg:text-[30px]">
              Buy XRP on CEX or bridge for XRP on changenow or similar
            </p>
            <button className="bg-[#fff] rounded-full cursor-pointer px-4 py-2 text-[#3BAAFC] logo">
              BRIDGE XRP
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl lg:text-[60px] logo font-bold">2</div>
            <p className="text-center max-w-xs lg:text-[30px]">
              Create your wallet on First Ledger, either the TG bot or the web
              version.
            </p>
            <button className="bg-[#fff] rounded-full cursor-pointer px-4 py-2 text-[#3BAAFC] logo">
              CREATE WALLET
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl lg:text-[60px] logo font-bold">3</div>
            <p className="text-center max-w-xs lg:text-[30px] w-[300px]">
              Send your XRP to your new wallet and ape:
              <span className={`text-[14px]`}>
                rH2AarcXtxzEbf6DprZz2PYGQJjANcnkYy
              </span>
            </p>
            <a
              href="https://firstledger.net/token/rH2AarcXtxzEbf6DprZz2PYGQJjANcnkYy/5748414C45000000000000000000000000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#fff] rounded-full cursor-pointer px-4 py-2 text-[#3BAAFC] logo">
                BUY NOW!
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="primaryBG text-white py-6 text-center text-sm sm:text-base">
        <div
          className={`flex justify-center items-center space-x-4 mb-[100px]`}
        >
          <img src="/whale banner.jpg" alt="" className={``} />
        </div>
        <p>© 2025 $WHALE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
