//import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-brown-900 mb-6">
              Hi, I'm <span className="text-brown-600">Najiya Nazrin C N</span>
            </h1>
            <p className="text-xl text-brown-700 mb-8">
              A passionate entrepreneur and tech enthusiast, currently pursuing B.Tech in Artificial Intelligence and Machine Learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="bg-brown-600 hover:bg-brown-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 cursor-pointer"
              >
                Get in Touch
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="border-2 border-brown-600 text-brown-600 hover:bg-brown-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 cursor-pointer"
              >
                View Projects
              </Link>
              <a
              href="./images/Najiya-Nazrin-C-N-FlowCV-Resume-20250205-1.pdf"
              download
              className="bg-brown-600 hover:bg-brown-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 cursor-pointer">
              Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-brown-600">
              <img
                src="./images/profile.png"
                
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="animate-bounce cursor-pointer"
          >
            <ChevronDown size={32} className="text-brown-600" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;