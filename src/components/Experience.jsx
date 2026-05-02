import { motion } from "framer-motion";
import { EXPERIENCES } from "../data/experience.js";

const Experience = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      id="experience"
      className="max-w-7xl mx-auto border-b border-neutral-900 pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-8 lg:px-32 xl:px-48"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-8 sm:mb-12 text-center lg:text-left"
        variants={item}
      >
        Experience
      </motion.h2>

      {/* Experience Cards */}
      <motion.div className="space-y-8 sm:space-y-12" variants={container}>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row lg:items-start gap-6"
            variants={item}
          >
            {/* Year Section */}
            <div className="w-full lg:w-1/4 text-center lg:text-left">
              <p className="text-sm sm:text-base text-neutral-400">{experience.year}</p>
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-3/4">
              <h6 className="text-lg sm:text-xl font-medium text-white mb-2">
                {experience.role}{" "}
                <span className="text-sm font-light text-purple-100">
                  - {experience.company}
                </span>
              </h6>
              <p className="text-neutral-400 text-sm sm:text-base mb-4 max-w-xl">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap justify-center sm:justify-start lg:justify-start gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-800 px-3 py-1 text-xs sm:text-sm font-medium text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Résumé Button */}
      <motion.div
        className="mt-8 sm:mt-12 lg:mt-16 text-center"
        variants={item}
      >
        <a
          href="https://drive.google.com/file/d/1fAX3vaL_RA4mONWoTKsGQhRYGihqif2d/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-neutral-900 text-white font-medium rounded-md hover:bg-neutral-800 transition-all duration-200 shadow-md"
        >
          View Full Résumé →
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
