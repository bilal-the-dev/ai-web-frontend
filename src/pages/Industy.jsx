import React from "react";
import { motion } from "framer-motion";
import { ArrowUpCircle, Settings, ArrowRight } from "lucide-react";
import {
  HERO_SECTION,
  VISION_BANNER,
  FEATURES,
  EFFICIENCY_CARDS,
  STATS,
} from "../constants/industry";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8 },
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

const FeatureSection = ({
  title,
  description,
  highlightText,
  imgSrc,
  imgAlt,
  reverse = false,
}) => (
  <motion.div
    className={`mb-20 bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm shadow-xl`}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={fadeIn}
  >
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-12`}
    >
      <motion.div className="md:w-1/2" variants={slideIn}>
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 leading-relaxed">
          {description} <span className="text-blue-400">{highlightText}</span>
        </p>
      </motion.div>
      <motion.div className="md:w-1/3" variants={scaleIn}>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="rounded-lg shadow-xl w-full hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </div>
  </motion.div>
);

const StatsSection = () => (
  <motion.div
    className="py-20 bg-gray-800/30 backdrop-blur-sm"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={fadeIn}
  >
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={scaleIn}
            custom={index}
          >
            <h3 className="text-4xl font-bold text-blue-400 mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <div className="bg-[#031223] min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="container mx-auto px-6 py-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div className="md:w-1/2 text-white" variants={slideIn}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {HERO_SECTION.title}{" "}
              <span className="inline-block mt-6">
                <span className="border border-white/30 bg-white/10 px-3 py-1">
                  {HERO_SECTION.highlightText}
                </span>
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              {HERO_SECTION.description}
            </p>
          </motion.div>
          <motion.div className="md:w-1/2" variants={scaleIn}>
            <img
              src={HERO_SECTION.imagePath}
              alt="Electronics inspection"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Vision Banner */}
      <motion.div
        className="flex flex-col mb-24 gap-y-3 justify-center items-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h3 className="text-3xl text-center lg:text-5xl font-semibold">
          <span className="bg-gradient-to-r tracking-wider from-white to-blue-400 bg-clip-text text-transparent">
            {VISION_BANNER.title}
          </span>
        </h3>
        <h4 className="text-sm text-center w-[80%] mx-auto lg:w-auto lg:mx-0 lg:text-2xl tracking-wider text-white">
          {VISION_BANNER.subtitle}
        </h4>
      </motion.div>

      {/* Features Section */}
      <div className="container mx-auto px-6">
        {FEATURES.map((feature, index) => (
          <FeatureSection key={index} {...feature} reverse={index % 2 !== 0} />
        ))}

        {/* Efficiency Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {EFFICIENCY_CARDS.map((card, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              variants={scaleIn}
              custom={index}
            >
              <div
                className={`${
                  index === 0 ? "bg-blue-600" : "bg-gray-600"
                } w-12 h-12 rounded-lg flex items-center justify-center mb-6`}
              >
                {index === 0 ? (
                  <ArrowUpCircle className="text-white" size={24} />
                ) : (
                  <Settings className="text-white" size={24} />
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {card.title}
              </h3>
              <div className="space-y-4">
                {card.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex gap-3">
                    <div className="text-blue-400 mt-1">✓</div>
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Unlock the potential of AI-powered computer vision to drive
            innovation in your industry
          </h2>
          <div className="flex">
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a demo
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
