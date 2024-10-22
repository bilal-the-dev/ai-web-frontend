import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { pageContent } from "../constants/product";
import AdditionalSections from "../components/AdditionalSections";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const LandingPage = () => {
  return (
    <div className="bg-[#031223] text-white p-6 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center gap-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h3
          className="text-3xl text-center pt-28 lg:text-5xl font-semibold"
          variants={slideIn}
        >
          <span className="bg-gradient-to-r tracking-wider from-white to-blue-text bg-clip-text text-transparent">
            {pageContent.hero.title}
          </span>
        </motion.h3>
        <motion.p className="text-center" variants={slideIn}>
          {pageContent.hero.subtitle}
        </motion.p>
        <motion.div
          className="hidden lg:block text-white font-bold"
          variants={slideIn}
        >
          <button className="bg-blue-600 rounded-l-full rounded-r-full px-6 py-2 lg:text-sm xl:text-base">
            {pageContent.hero.buttonText}
          </button>
        </motion.div>
        <motion.div className="flex h-full items-center" variants={fadeIn}>
          <img
            className="object-contain w-full h-full"
            src={pageContent.hero.image}
            alt=""
          />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-12 lg:py-28 text-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <img
            src={pageContent.feature_1.image}
            alt="Visual Prompting Interface"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <motion.h3
            className="text-3xl lg:text-5xl font-semibold mb-6 text-center lg:text-left"
            variants={slideIn}
          >
            <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent tracking-wider">
              {pageContent.feature_1.title}
            </span>
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-center lg:text-left"
            variants={slideIn}
          >
            {pageContent.feature_1.description}
          </motion.p>

          <motion.ul className="space-y-4 mb-8" variants={slideIn}>
            {pageContent.feature_1.bulletPoints.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideIn}
              >
                <CheckCircle2 className="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex justify-center lg:justify-start space-x-4"
            variants={slideIn}
          >
            {pageContent.feature_1.buttons.map((button, index) => (
              <button
                key={index}
                className={`${
                  button.primary
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                } font-bold py-2 px-6 rounded-full transition duration-300`}
              >
                {button.text}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-12 lg:py-28 text-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <motion.h3
            className="text-3xl lg:text-5xl font-semibold mb-6 text-center lg:text-left"
            variants={slideIn}
          >
            <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent tracking-wider">
              {pageContent.feature_2.title}
            </span>
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-center lg:text-left"
            variants={slideIn}
          >
            {pageContent.feature_2.description}
          </motion.p>

          <motion.ul className="space-y-4 mb-8" variants={slideIn}>
            {pageContent.feature_2.bulletPoints.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideIn}
              >
                <CheckCircle2 className="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex justify-center lg:justify-start space-x-4"
            variants={slideIn}
          >
            {pageContent.feature_2.buttons.map((button, index) => (
              <button
                key={index}
                className={`${
                  button.primary
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                } font-bold py-2 px-6 rounded-full transition duration-300`}
              >
                {button.text}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <img
            src={pageContent.feature_2.image}
            alt="Visual Prompting Interface"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Data-Centric AI Section */}
      <motion.div
        className="bg-blue-600 text-white p-8 flex items-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="flex-1 pr-8" variants={slideIn}>
          <motion.h2 className="text-2xl font-bold mb-4" variants={slideIn}>
            {pageContent.dataCentricAI.title}
          </motion.h2>
          <motion.h1 className="text-4xl font-bold mb-6" variants={slideIn}>
            {pageContent.dataCentricAI.heading}
          </motion.h1>
          <motion.p className="mb-4" variants={slideIn}>
            {pageContent.dataCentricAI.description}
          </motion.p>
          <motion.ul className="space-y-2" variants={slideIn}>
            {pageContent.dataCentricAI.bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideIn}
              >
                <CheckCircle2 className="mr-2 flex-shrink-0 mt-1" size={20} />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold"
            variants={slideIn}
          >
            {pageContent.dataCentricAI.buttonText}
          </motion.button>
        </motion.div>

        <motion.div className="flex-1" variants={slideIn}>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex space-x-4">
              {pageContent.dataCentricAI.images.map((image, index) => (
                <motion.div key={index} className="flex-1" variants={slideIn}>
                  <img
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto rounded"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-700">
                      Agreement Score - {image.score}
                    </span>
                    {image.agreement ? (
                      <CheckCircle2 className="text-green-500" size={24} />
                    ) : (
                      <XCircle className="text-red-500" size={24} />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-12 lg:py-28 text-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <img
            src={pageContent.feature_3.image}
            alt="Visual Prompting Interface"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div className="w-full lg:w-1/2 max-w-2xl" variants={slideIn}>
          <motion.h3
            className="text-3xl lg:text-5xl font-semibold mb-6 text-center lg:text-left"
            variants={slideIn}
          >
            <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent tracking-wider">
              {pageContent.feature_3.title}
            </span>
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-center lg:text-left"
            variants={slideIn}
          >
            {pageContent.feature_3.description}
          </motion.p>

          <motion.ul className="space-y-4 mb-8" variants={slideIn}>
            {pageContent.feature_3.bulletPoints.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={slideIn}
              >
                <CheckCircle2 className="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex justify-center lg:justify-start space-x-4"
            variants={slideIn}
          >
            {pageContent.feature_3.buttons.map((button, index) => (
              <button
                key={index}
                className={`${
                  button.primary
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                } font-bold py-2 px-6 rounded-full transition duration-300`}
              >
                {button.text}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <AdditionalSections />
    </div>
  );
};

export default LandingPage;
