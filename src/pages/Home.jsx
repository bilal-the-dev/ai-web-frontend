import React, { useState } from "react";
import left from "../assets/Home/left.webp";
import right from "../assets/Home/right.webp";
import slide1 from "../assets/slider/pic1.webp";
import slide2 from "../assets/slider/pic2.webp";
import slide3 from "../assets/slider/pic3.png";
import rabbit from "../assets/slider/icons/rabbit.svg";
import video from "../assets/Home/desktop-1.mp4";
import { motion } from "framer-motion";
import { COLORS } from "../constants/config";

const Home = () => {
  const [activeButton, setActiveButton] = useState("LandingLens");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const buttonData = [
    {
      label: "LandingLens",
      bgColor: "bg-[#023357]",
      imgSrc: "path/to/landinglens-image.jpg",
    },
    {
      label: "LandingLens on Snowflake",
      bgColor: "bg-[#023357]",
      imgSrc: "path/to/landinglens-snowflake-image.jpg",
    },
    {
      label: "VisionAgent",
      bgColor: "bg-[#023357]",
      imgSrc: "path/to/visionagent-image.jpg",
    },
  ];

  // const slideData = [
  //     { img: slide1,  imgSrc: 'path/to/landinglens-image.jpg' },
  //     { label: 'LandingLens on Snowflake', bgColor: 'bg-[#023357]', imgSrc: 'path/to/landinglens-snowflake-image.jpg' },
  //     { label: 'VisionAgent', bgColor: 'bg-[#023357]', imgSrc: 'path/to/visionagent-image.jpg' },
  // ];

  return (
    <div style={{ backgroundColor: COLORS.background, color: COLORS.text }}>
      {/* ..hero section */}
      <div
        className="w-full mb-24 text-white"
        style={{ backgroundColor: COLORS.background, color: COLORS.text }}
      >
        <div
          className="w-full h-auto flex lg:flex-row flex-col justify-center items-center mb-24"
          style={{ backgroundColor: COLORS.background, color: COLORS.text }}
        >
          {/* Left Section */}
          <motion.div
            className="left h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex w-full h-full items-center">
              <img className="object-contain w-full h-full" src={left} alt="" />
            </div>
          </motion.div>

          {/* Center Section */}
          <motion.div
            className="mt-4 mb-6 lg:my-0 center flex-1 h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mt-12 h-full w-full gap-y-8 items-center flex-col">
              <div className="et_pb_text_inner flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold text-center">
                  <span className={`${COLORS.title_color}`}>
                    Redefining Vision
                  </span>
                </h1>
                <h1 className="text-7xl lg:text-8xl font-bold">
                  <span className="bg-gradient-to-r from-blue-text to-green-text bg-clip-text text-transparent">
                    with AI
                  </span>
                </h1>
              </div>
              <div
                className="text-2xl text-nowrap text-center font-bold"
                style={{ color: COLORS.text }}
              >
                Transform your images, videos, and streams into actionable
                insights with custom-built <br /> computer vision solutions.
              </div>
              <div className="flex gap-x-4 lg:gap-x-8">
                <button className="bg-blue-500 text-white font-bold text-center px-6 py-1.5 rounded-r-full rounded-l-full">
                  Start Your Vision
                </button>
                <button className="bg-gray-500 text-white font-bold text-center px-6 py-1.5 rounded-r-full rounded-l-full">
                  See It in Action
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="right h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex w-full h-full items-center">
              <img
                className="object-contain w-full h-full"
                src={right}
                alt=""
              />
            </div>
          </motion.div>
        </div>

        {/* Video Section */}
        <div
          className=" py-6"
          style={{ backgroundColor: COLORS.background, color: COLORS.text }}
        >
          <div className="flex flex-col gap-y-3 justify-center items-center">
            <motion.h3
              className="text-3xl text-center lg:text-5xl font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className={`${COLORS.title_color}`}>
                Streamline Your Vision Solutions
              </span>
            </motion.h3>
            <motion.h4
              className="text-sm text-center w-[80%] mx-auto lg:w-auto lg:mx-0 lg:text-2xl tracking-wider text-white px-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: COLORS.text }}
            >
              Power your business with tailored solutions for object detection,
              real-time tracking, and more—crafted to extract meaningful
              insights from images, videos, and streams.
            </motion.h4>
          </div>

          <div className="lg:hidden flex et_pb_code_inner mt-12 justify-center items-center">
            <motion.video
              id="miVideo"
              playsInline
              autoPlay
              muted
              loop
              className="border border-[#003666] rounded-lg"
              style={{ border: "1px solid #003666", borderRadius: "16px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <source
                type="video/mp4"
                src="https://landing.ai/wp-content/uploads/2024/09/Marketecture-Mobile.mp4"
              />
              Your browser does not support the video tag.
            </motion.video>
          </div>

          <div className="hidden lg:flex et_pb_code_inner mt-12 justify-center items-center">
            <motion.video
              id="miVideo"
              playsInline
              autoPlay
              muted
              loop
              className="border border-[#003666] w-[75%] rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <source type="video/mp4" src={video} />
              Your browser does not support the video tag.
            </motion.video>
          </div>
        </div>
      </div>

      {/* changing sliders sections */}
      <div
        className=" p-2 lg:p-16"
        style={{ backgroundColor: COLORS.background }}
      >
        <div>
          <div className="et_pb_text_inner">
            <h3 className="text-3xl  lg:text-6xl font-semibold">
              <span className={`${COLORS.title_color}`}>
                Visual AI: Tailored for Your Unique Vision Tasks
              </span>
            </h3>
          </div>
          <div className="flex px-0 lg:px-5 gap-x-4 mt-6">
            {buttonData.map((button, index) => (
              <button
                key={index}
                className={`px-4 text-sm lg:px-12 cursor-pointer text-center font-semibold rounded-full text-white py-2 lg:py-1.5 ${
                  activeButton === button.label
                    ? "bg-gradient-to-r from-[#023357] to-[#1677DC]"
                    : button.bgColor
                }`}
                onClick={() => handleButtonClick(button.label)}
              >
                {button.label}
              </button>
            ))}
            {/* {activeButton && (
                <div className="mt-4">
                    <img src={buttonData.find(button => button.label === activeButton).imgSrc} alt={activeButton} className="w-full h-auto" />
                </div>
            )} */}
          </div>
          {/* images etc */}
          <div>
            {activeButton === "LandingLens" && (
              <div className="flex lg:flex-row flex-col w-full lg:w-auto gap-x-8 py-8 justify-center">
                <div className="text-4xl font-semibold  w-full lg:w-1/2 text-white">
                  <div className="-ml-4 flex ">
                    <div
                      className="w-1 bg-gradient-to-b from-blue-text to-green-text"
                      style={{ color: COLORS.text }}
                    ></div>
                    <div
                      className="ml-4 text-2xl lg:text-4xl"
                      style={{ color: COLORS.text }}
                    >
                      <h1>Attendance has never been easier</h1>
                    </div>
                  </div>
                  <div
                    className="flex flex-col gap-y-2 py-4 mt-4"
                    style={{ color: COLORS.text }}
                  >
                    <div
                      className="flex justify-center  items-start"
                      style={{ color: COLORS.text }}
                    >
                      <img src={rabbit} alt="" />
                      <div
                        className="text-white font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        Real-Time Attendance: Making attendance management
                        seamless for teachers by automating student recognition
                        using cameras and facial detection
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div
                        className="font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        Cloud-Powered: Fast and accurate processing, even on
                        low-end devices, thanks to cloud integration
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div
                        className="text-white font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        One-Click Setup: Teachers can set up and start using
                        Attendify with minimal effort, requiring no technical
                        expertise
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div
                        className="text-white font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        Automated Reporting: Automatically generates detailed
                        attendance reports and analysis, streamlining
                        administrative processes for schools
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:justify-start lg:items-start mt-6 gap-x-6">
                    <button
                      className={`${COLORS.titel_bg} block px-4 py-1 text-base rounded-l-full rounded-r-full text-center text-white`}
                    >
                      Try LandingLens
                    </button>
                    <button className="block px-4 py-1 text-base bg-[#031223] border-[1px]  border-white rounded-l-full rounded-r-full text-center text-white">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="text-5xl w-full lg:w-1/2 mt-12 lg:mt-0 text-white">
                  <div>
                    <img
                      className="object-cover w-full h-full"
                      src={slide1}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Content for LandingLens on Snowflake */}
            {activeButton === "LandingLens on Snowflake" && (
              <div className="flex lg:flex-row flex-col w-full lg:w-auto gap-x-8 py-8 justify-center">
                <div className="text-4xl font-semibold  w-full lg:w-1/2 text-white">
                  <div className="-ml-4 flex ">
                    <div className="text-white w-1 bg-gradient-to-b from-blue-text to-green-text "></div>
                    <div
                      className="ml-4 text-2xl lg:text-4xl"
                      style={{ color: COLORS.text }}
                    >
                      <h1>Unlock Visual AI Capabilities in Snowflake</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 py-4 mt-4">
                    <div className="flex justify-center  items-start">
                      <img src={rabbit} alt="" />
                      <div
                        className="text-white font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div
                        className="text-white font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div
                        className="text-white font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div
                        className="text-white font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:justify-start lg:items-start mt-6 gap-x-6">
                    <button
                      className={`${COLORS.titel_bg} block px-4 py-1 text-base rounded-l-full rounded-r-full text-center text-white`}
                    >
                      Try LandingLens
                    </button>
                    <button className="block px-4 py-1 text-base bg-[#031223] border-[1px]  border-white rounded-l-full rounded-r-full text-center text-white">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="text-5xl w-full lg:w-1/2 mt-12 lg:mt-0 text-white">
                  <div>
                    <img
                      className="object-cover w-full h-full"
                      src={slide2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}

            {activeButton === "VisionAgent" && (
              <div className="flex lg:flex-row flex-col w-full lg:w-auto gap-x-8 py-8 justify-center">
                <div className="text-4xl font-semibold  w-full lg:w-1/2 text-white">
                  <div className="-ml-4 flex ">
                    <div className="text-white w-1 bg-gradient-to-b from-blue-text to-green-text "></div>
                    <div
                      className="ml-4 text-2xl lg:text-4xl"
                      style={{ color: COLORS.text }}
                    >
                      <h1>A Visual AI Pilot for Developers</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 py-4 mt-4">
                    <div className="flex justify-center  items-start">
                      <img src={rabbit} alt="" />
                      <div
                        className="text-white font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div
                        className="text-white font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div
                        className="text-white font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div
                        className="text-white font-semibold text-lg"
                        style={{ color: COLORS.text }}
                      >
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:justify-start lg:items-start mt-6 gap-x-6">
                    <button
                      className={`${COLORS.titel_bg} block px-4 py-1 text-base rounded-l-full rounded-r-full text-center text-white`}
                    >
                      Try LandingLens
                    </button>
                    <button className="block px-4 py-1 text-base bg-[#031223] border-[1px]  border-white rounded-l-full rounded-r-full text-center text-white">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="text-5xl w-full lg:w-1/2 mt-12 lg:mt-0 text-white">
                  <div>
                    <img
                      className="object-cover w-full h-full"
                      src={slide3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className=" p-2 lg:p-16 flex flex-col gap-8 animate-fadeIn"
        style={{ backgroundColor: COLORS.background }}
      >
        <h3 className="text-3xl text-center lg:text-5xl font-semibold">
          <span className={`${COLORS.title_color}`}>
            Empower Your Vision <br />
            with a Visual AI Platform
          </span>
        </h3>

        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          {[
            {
              value: "80",
              description:
                "On average, our users cut down their time to deployment by 80%",
              gradient:
                "linear-gradient(152deg, #71E14C 39.27%, #62D134 93.33%)",
            },
            {
              value: "30K",
              description:
                "Trusted by over 30K+ customers for production-grade deployments",
              gradient:
                "linear-gradient(152deg, #5BA9F9 19.84%, #187EE9 73.91%)",
            },
            {
              value: "1B",
              description:
                "Run inference for 1B+ images yearly with 99.99% uptime reliability",
              gradient:
                "linear-gradient(152deg, #5BF9DA 19.84%, #187EE9 73.91%)",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 animate-fadeIn"
            >
              <div className="text-center">
                <span
                  style={{
                    background: item.gradient,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "80px",
                  }}
                >
                  {item.value}
                </span>
                <sup
                  className="text-2xl text-white"
                  style={{ color: COLORS.text }}
                >
                  %
                </sup>
                <p
                  className="text-white text-sm mt-2"
                  style={{ color: COLORS.text }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className=" p-12 lg:p-16 flex flex-col gap-8 animate-fadeIn"
        style={{ backgroundColor: COLORS.background }}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-lg p-8 flex-1 transition-transform transform hover:scale-105 animate-fadeIn">
            <div className="text-center">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
                Get Your Custom Computer Vision Solution Delivered
              </h1>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                  Try LandingLens
                </button>
                <button className="bg-transparent text-white font-semibold py-2 px-6 rounded-full border-2 border-white hover:bg-white hover:text-blue-500 transition-colors duration-300">
                  Get a Demo
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 lg:w-1/3 animate-fadeIn">
            <h2 className="text-blue-300 text-xl font-semibold mb-4">
              Explore Our Products
            </h2>
            <ul className="space-y-3">
              <li className="text-white">Attendify</li>
              <li className="text-white border-t border-gray-700 pt-3">
                VisitorVue
              </li>
              <li className="text-white border-t border-gray-700 pt-3">
                OmniRoad
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
