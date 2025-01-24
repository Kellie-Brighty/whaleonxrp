import { motion } from "framer-motion";
import "./App.css";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogoFill } from "react-icons/pi";

function App() {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Header */}
      <header className="fixed top-0 w-full bg-black bg-opacity-60 text-white py-4 z-10">
        <nav className="max-w-7xl mx-auto px-4 lg:px-[100px] flex justify-between items-center">
          <img src="/logo.png" alt="Logo" className="h-[80px] w-[80px]" />
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#hero" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            {/* <li>
              <a href="#tokenomics" className="hover:underline">
                Tokenomics
              </a>
            </li> */}
            <button className="bg-purple-500 rounded-full cursor-pointer p-4">
              <p>Buy $XRP</p>
            </button>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center text-center text-white px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            Xenophobic Retarded Philosophy
          </h1>
          <p className="text-xl md:text-2xl">
            Revolutionizing the Crypto Space.
          </p>

          <div className={`flex justify-center space-x-4`}>
            <div
              className={`bg-black p-5 rounded-full text-2xl cursor-pointer`}
            >
              <FaXTwitter />
            </div>
            <div
              className={`bg-black p-5 rounded-full text-2xl cursor-pointer`}
            >
              <PiTelegramLogoFill />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`min-h-screen flex items-center justify-center text-center text-white 
          px-4 bg-gradient-to-r from-blue-900 to-purple-900`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl space-y-4"
        >
          <h2 className="text-4xl font-bold">$XRP</h2>
          <div className="relative group">
            <img
              src="/banner.jpg"
              alt="About Us"
              className="transition-transform duration-300 transform group-hover:scale-110 rounded-2xl"
            />
          </div>
          <p className="text-lg border border-[#ccc] p-4 rounded-lg">
            Xenophobic Retarded Philosophy (XRP) is a bold meme token embracing
            humor and absurdity to disrupt the crypto space. Built for laughs,
            community vibes, and viral memes, it’s all about turning chaos into
            a statement. 🚀
          </p>
        </motion.div>
      </section>

      {/* Tokenomics Section */}
      {/* <section
        id="tokenomics"
        className={`min-h-screen flex items-center justify-center text-center 
          text-white px-4 bg-gradient-to-b from-purple-900 to-black`}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl space-y-6"
        >
          <h2 className="text-4xl font-bold">Tokenomics</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>50% allocated for community rewards.</li>
            <li>30% for ecosystem development.</li>
            <li>15% reserved for partnerships.</li>
            <li>5% for team incentives.</li>
          </ul>
        </motion.div>
      </section> */}

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>© 2025 Xenophobic Retarded Philosophy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
