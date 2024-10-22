import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import left from "../assets/Home/left.webp";
import right from "../assets/Home/right.webp";
import logo1 from "../assets/logos/logo1.svg";
import logo2 from "../assets/logos/logo2.svg";
import logo3 from "../assets/logos/logo3.svg";
import logo4 from "../assets/logos/logo4.svg";
import logo5 from "../assets/logos/logo5.svg";
import logo6 from "../assets/logos/logo6.svg";
import logo7 from "../assets/logos/logo7.svg";
import logo8 from "../assets/logos/logo8.svg";
import logo9 from "../assets/logos/logo9.svg";
import slide1 from "../assets/slider/pic1.webp";
import slide2 from "../assets/slider/pic2.webp";
import slide3 from "../assets/slider/pic3.png";
import rabbit from "../assets/slider/icons/rabbit.svg";
import Footer from "../components/Footer.jsx";

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
    <div className="bg-[#031223]">
      {/* ..hero section */}
      <div className="w-full  bg-[#031223] text-white">
        <div className="w-full bg-[#031223] h-auto  flex lg:flex-row flex-col justify-center items-center">
          {/* //left */}
          <div className="left   h-full ">
            {/* image */}
            <div className="flex  w-full h-full  items-center">
              <img className="object-contain w-full h-full" src={left} alt="" />
            </div>
          </div>

          {/* center */}
          <div className="mt-4 mb-6 lg:my-0 center flex-1  h-full ">
            <div className="flex justify-center mt-12 h-full w-full gap-y-8 items-center flex-col">
              <div class="et_pb_text_inner flex flex-col justify-center items-center">
                <h1 class="text-5xl font-bold text-center">
                  <span class="bg-gradient-to-r from-blue-text tracking-wider to-green-text bg-clip-text text-transparent">
                    Unleashing the Power of
                  </span>
                </h1>
                <h1 class="text-7xl lg:text-8xl font-bold">
                  <span class="bg-gradient-to-r from-blue-text to-green-text bg-clip-text text-transparent">
                    Visual AI
                  </span>
                </h1>
              </div>
              <div className="text-2xl text-nowrap text-white text-center font-bold">
                Transform Your Images and Videos into Visual <br /> Intelligence
              </div>
              <div className="flex gap-x-4 lg:gap-x-8">
                <button className="bg-blue-500 text-white font-bold text-center px-6 py-1.5 rounded-r-full rounded-l-full">
                  Try LandingLens
                </button>
                <button className="bg-gray-500 text-white font-bold text-center px-6 py-1.5 rounded-r-full rounded-l-full">
                  Get a Demo
                </button>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="right   h-full ">
            {/* image */}
            <div className="flex  w-full h-full  items-center">
              <img
                className="object-contain w-full h-full"
                src={right}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* //moving logos section */}
      <div className="bg-[#031223] py-4">
        <div className="w-full flex justify-center items-center text-white font-semibold">
          <h1>TRUSTED BY</h1>
        </div>
        {/* moving logos animation */}
        <div className="flex overflow-hidden space-x-16">
          <div className="flex space-x-16 animate-loop-scroll p-8">
            <img loading="lazy" src={logo1} className="max-w-none" alt="" />
            <img loading="lazy" src={logo2} className="max-w-none" alt="" />
            <img loading="lazy" src={logo3} className="max-w-none" alt="" />
            <img loading="lazy" src={logo4} className="max-w-none" alt="" />
            <img loading="lazy" src={logo5} className="max-w-none" alt="" />
            <img loading="lazy" src={logo6} className="max-w-none" alt="" />
            <img loading="lazy" src={logo7} className="max-w-none" alt="" />
            <img loading="lazy" src={logo8} className="max-w-none" alt="" />
            <img loading="lazy" src={logo9} className="max-w-none" alt="" />
          </div>

          <div
            className="flex space-x-16 animate-loop-scroll p-8"
            aria-hidden="true"
          >
            <img loading="lazy" src={logo1} className="max-w-none" alt="" />
            <img loading="lazy" src={logo2} className="max-w-none" alt="" />
            <img loading="lazy" src={logo3} className="max-w-none" alt="" />
            <img loading="lazy" src={logo4} className="max-w-none" alt="" />
            <img loading="lazy" src={logo5} className="max-w-none" alt="" />
            <img loading="lazy" src={logo6} className="max-w-none" alt="" />
            <img loading="lazy" src={logo7} className="max-w-none" alt="" />
            <img loading="lazy" src={logo8} className="max-w-none" alt="" />
            <img loading="lazy" src={logo9} className="max-w-none" alt="" />
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="bg-[#031223] py-6  ">
        <div className="flex flex-col gap-y-3 justify-center items-center">
          <h3 class="text-3xl text-center  lg:text-5xl font-semibold">
            <span class="bg-gradient-to-r tracking-wider from-white to-blue-text bg-clip-text text-transparent">
              Turbocharge Visual AI Deployment
            </span>
          </h3>
          <h4 className="text-sm text-center w-[80%] mx-auto lg:w-auto lg:mx-0 lg:text-2xl  tracking-wider  text-white">
            Rapidly prototype, deploy, and scale vision tasks to enrich your
            visual intelligence
          </h4>
        </div>

        <div className="  lg:hidden flex et_pb_code_inner  mt-12 justify-center items-centerr">
          <video
            id="miVideo"
            playsInline
            autoPlay
            muted
            loop
            className="border border-[#003666] rounded-lg"
            style={{ border: "1px solid #003666", borderRadius: "16px" }}
          >
            <source
              type="video/mp4"
              src="https://landing.ai/wp-content/uploads/2024/09/Marketecture-Mobile.mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hidden lg:flex et_pb_code_inner  mt-12 justify-center items-center">
          <video
            id="miVideo"
            playsInline
            autoPlay
            muted
            loop
            className="border border-[#003666] w-[75%] rounded-lg"
          >
            <source
              type="video/mp4"
              src="https://landing.ai/wp-content/uploads/2024/09/Marketecture-Desktop-1.mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* changing sliders sections */}
      <div className="bg-[#031223] p-2 lg:p-16">
        <div>
          <div className="et_pb_text_inner">
            <h3 className="text-3xl  lg:text-6xl font-semibold">
              <span className="bg-gradient-to-r from-white to-blue-text  bg-clip-text text-transparent">
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
                    <div className="text-white w-1 bg-gradient-to-b from-blue-text to-green-text "></div>
                    <div className="ml-4 text-2xl lg:text-4xl">
                      <h1>Build and Deploy Computer Vision Models</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 py-4 mt-4">
                    <div className="flex justify-center  items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:justify-start lg:items-start mt-6 gap-x-6">
                    <button className="block px-4 py-1 text-base bg-blue-500 rounded-l-full rounded-r-full text-center text-white">
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
                    <div className="ml-4 text-2xl lg:text-4xl">
                      <h1>Unlock Visual AI Capabilities in Snowflake</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 py-4 mt-4">
                    <div className="flex justify-center  items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:justify-start lg:items-start mt-6 gap-x-6">
                    <button className="block px-4 py-1 text-base bg-blue-500 rounded-l-full rounded-r-full text-center text-white">
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
                    <div className="ml-4 text-2xl lg:text-4xl">
                      <h1>A Visual AI Pilot for Developers</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2 py-4 mt-4">
                    <div className="flex justify-center  items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                    <div className="flex justify-center items-start">
                      <img src={rabbit} alt="" />
                      <div className="text-white font-semibold text-lg">
                        Accelerated MLOps: Reduce time-to-value with streamlined
                        cycles
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center lg:justify-start lg:items-start mt-6 gap-x-6">
                    <button className="block px-4 py-1 text-base bg-blue-500 rounded-l-full rounded-r-full text-center text-white">
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

      <div className="bg-[#031223] p-2 lg:p-16 flex flex-col gap-8">
        <h3 class="text-3xl text-center  lg:text-5xl font-semibold">
          <span class="bg-gradient-to-r tracking-wider from-white to-blue-text bg-clip-text text-transparent">
            Empower Your Vision <br />
            with a Visual AI Platform
          </span>
        </h3>

        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="border border-gray-700 rounded-lg p-6 shadow-lg">
            <div className="et_pb_module et_pb_text et_pb_text_13 et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <span
                  style={{
                    background:
                      "linear-gradient(152deg, #71E14C 39.27%, #62D134 93.33%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "80px",
                  }}
                >
                  80
                </span>
                <sup className="text-2xl text-white">%</sup>
                <p></p>
                <p
                  style={{ color: "white", fontSize: "16px", marginTop: "8px" }}
                >
                  <span>
                    On average, our users cut down their time to deployment by
                    80%
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 shadow-lg">
            <div className="et_pb_module et_pb_text et_pb_text_14 et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <span
                  style={{
                    background:
                      "linear-gradient(152deg, #5BA9F9 19.84%, #187EE9 73.91%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "80px",
                  }}
                >
                  30K
                </span>
                <sup className="text-2xl text-white">+</sup>
                <p></p>
                <p
                  style={{ color: "white", fontSize: "16px", marginTop: "8px" }}
                >
                  Trusted by over 30K+ customers for production-grade
                  deployments
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 shadow-lg">
            <div className="et_pb_module et_pb_text et_pb_text_15 et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <span
                  style={{
                    background:
                      "linear-gradient(152deg, #5BF9DA 19.84%, #187EE9 73.91%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "80px",
                  }}
                >
                  1B
                </span>
                <sup className="text-2xl text-white">+</sup>
                <p></p>
                <p
                  style={{ color: "white", fontSize: "16px", marginTop: "8px" }}
                >
                  Run inference for 1B+ images yearly with 99.99% uptime
                  reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#031223] p-12 lg:p-16 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-lg p-8 flex-1">
            <div className="text-center">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
                Unleashing the Power of Visual AI
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
          <div className="bg-gray-800 rounded-lg p-6 lg:w-1/3">
            <h2 className="text-blue-300 text-xl font-semibold mb-4">
              Start your Visual AI Journey Today
            </h2>
            <ul className="space-y-3">
              <li className="text-white">LandingLens</li>
              <li className="text-white border-t border-gray-700 pt-3">
                LandingLens on Snowflake
              </li>
              <li className="text-white border-t border-gray-700 pt-3">
                VisionAgent
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
