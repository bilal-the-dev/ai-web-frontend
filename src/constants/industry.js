// constants.js

import Hero from "../assets/industry/hero.webp";
import Feature from "../assets/industry/e1.webp";
export const HERO_SECTION = {
  title: "Computer Vision in",
  highlightText: "Electronics",
  description:
    "Electronic parts are complex and may present a multitude of defects. The application of artificial intelligence and deep learning solutions in the electronics industry can help.",
  imagePath: Hero,
};

export const VISION_BANNER = {
  title: "Turbocharge Visual AI Deployment",
  subtitle:
    "Rapidly prototype, deploy, and scale vision tasks to enrich your visual intelligence",
};

export const FEATURES = [
  {
    title: "Wafer Defect Inspection",
    description:
      "Wafer inspection involves inspecting each individual layer of a semiconductor wafer for defects before applying the next layer. Defects can include cracks, scratches, missing components, and edge defects. While machine vision technology provides a means for automated visual inspection, the range of potential defects on a wafer is significant. Our deep learning software can be trained on a set of images and can help with",
    highlightText: "auto defect classification",
    imgSrc: Feature,
    imgAlt: "Wafer Inspection",
  },
  {
    title: "Optical Pattern Recognition",
    description:
      "Optical pattern recognition involves analyzing visual patterns using machine vision technology to detect issues such as alignment errors, material inconsistencies, or design flaws. Our AI-based system offers precise pattern matching and defect detection.",
    highlightText: "high precision detection",
    imgSrc: Feature,
    imgAlt: "Optical Pattern Recognition",
  },
  {
    title: "Semiconductor Quality Control",
    description:
      "Our software is designed to automate the quality control process in semiconductor manufacturing, ensuring that each wafer meets strict quality standards. With deep learning capabilities, the system continually improves over time.",
    highlightText: "automated quality control",
    imgSrc: Feature,
    imgAlt: "Semiconductor Quality Control",
  },
];

export const EFFICIENCY_CARDS = [
  {
    icon: "ArrowUpCircle",
    title: "Maintain Quality, Boost Efficiency",
    points: [
      "Visual inspection of electronic devices poses several challenges, largely due to the sheer number of applications involved. Tasks such as wafer inspection, PCB inspection, and welding/soldering inspection each present unique, difficult complexities for traditional machine vision systems.",
      "By training software with images of defective and non-defective parts, LandingLens can perform better than rules-based systems, improve inspection accuracy, and reduce false positives. Additionally, the software standardizes deep learning solutions to reduce development time and to scale projects easily to multiple facilities.",
    ],
  },
  {
    icon: "Settings",
    title: "Easily Adapt to Evolving Needs",
    points: [
      "Electronics manufacturing needs can quickly vary and evolve, for example, when new or customized parts are introduced into a process. Deep learning systems must be flexible and capable of adapting to meet new inspection requirements in today's ever-changing manufacturing environment.",
      "LandingLens deep learning software provides continuous learning capabilities, which makes the accommodation of changes fast and easy. When new parts are introduced or environmental changes occur, users can easily add new images into the model and update it on the go.",
    ],
  },
];

export const STATS = [
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "60%", label: "Faster Deployment" },
  { value: "40%", label: "Cost Reduction" },
  { value: "24/7", label: "Monitoring" },
];
