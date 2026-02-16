import { motion } from "framer-motion";
import profilepic from "../assets/profile.png";
import { Link } from "react-router-dom";

const Hero = () => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      id="home"
      className="border-b border-neutral-900 pt-20 sm:pt-28 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-8 lg:px-32 xl:px-48"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:items-center">
        {/* Left Section: Text */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center text-center lg:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-medium text-white leading-tight pb-2 sm:pb-3"
            variants={item}
          >
            Suhail Jaffarullah
          </motion.h1>
          <motion.p
            className="text-sm sm:text-lg lg:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            variants={item}
          >
            Future Cloud & Security Engineer exploring AI and building real-world solutions.
          </motion.p>
          <motion.div className="mt-6" variants={item}>
            <Link
              to="/about"
              className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-neutral-900 text-white text-sm sm:text-base font-medium rounded-md hover:bg-neutral-800 transition-all duration-200 shadow-md"
            >
              Get to know me more →
            </Link>
          </motion.div>
        </div>

        {/* Right Section: Image */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profilepic}
            alt="Suhail Jaffarullah"
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-lg shadow-lg object-cover"
            loading="lazy" // Lazy loading
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
