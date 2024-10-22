import React, { useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CONTACT_US_CONTENT } from "../constants/contact";

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

const ContactUsPage = () => {
  return (
    <div className="bg-[#031223] text-white min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            {CONTACT_US_CONTENT.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-blue-200 max-w-3xl mx-auto">
            {CONTACT_US_CONTENT.hero.subtitle}
          </p>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Contact Information and Form Section */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {CONTACT_US_CONTENT.contactInfo.title}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-blue-400" />
                  <p>{CONTACT_US_CONTENT.contactInfo.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-blue-400" />
                  <p>{CONTACT_US_CONTENT.contactInfo.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-blue-400" />
                  <p>{CONTACT_US_CONTENT.contactInfo.email}</p>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-4 text-blue-400" />
                  <p>{CONTACT_US_CONTENT.contactInfo.hours}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-4">
                {CONTACT_US_CONTENT.socialMedia.title}
              </h3>
              <div className="flex space-x-4">
                {CONTACT_US_CONTENT.socialMedia.platforms.map(
                  (platform, index) => (
                    <motion.a
                      key={platform}
                      href="#"
                      className="text-blue-400 hover:text-blue-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {platform === "LinkedIn" && (
                        <Linkedin className="w-8 h-8" />
                      )}
                      {platform === "Twitter" && (
                        <Twitter className="w-8 h-8" />
                      )}
                      {platform === "Facebook" && (
                        <Facebook className="w-8 h-8" />
                      )}
                    </motion.a>
                  )
                )}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                {CONTACT_US_CONTENT.contactForm.title}
              </h2>
              <form className="space-y-6">
                {CONTACT_US_CONTENT.contactForm.fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows="4"
                        className="w-full px-3 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        className="w-full px-3 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                ))}
                <motion.button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {CONTACT_US_CONTENT.contactForm.submitButton}
                  <Send className="w-5 h-5 ml-2" />
                </motion.button>
              </form>
            </div>
          </div>
        </AnimatedSection>

        {/* About Us Section */}
        <AnimatedSection>
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6">
              {CONTACT_US_CONTENT.aboutUs.title}
            </h2>
            {CONTACT_US_CONTENT.aboutUs.description.map((paragraph, index) => (
              <p key={index} className="text-lg mb-4">
                {paragraph}
              </p>
            ))}
            <motion.a
              href="#"
              className="text-blue-400 hover:text-blue-300 font-semibold"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {CONTACT_US_CONTENT.aboutUs.cta}
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Industries We Serve Section */}
        <AnimatedSection>
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6">
              {CONTACT_US_CONTENT.industries.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {CONTACT_US_CONTENT.industries.list.map((industry) => (
                <motion.div
                  key={industry}
                  className="bg-blue-900 p-4 rounded-md text-center hover:bg-blue-800 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="font-semibold">{industry}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {CONTACT_US_CONTENT.faq.title}
            </h2>
            <div className="space-y-6">
              {CONTACT_US_CONTENT.faq.questions.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-900 p-6 rounded-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default ContactUsPage;
