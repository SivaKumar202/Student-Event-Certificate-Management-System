import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from './Footer';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>

    <section className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-[#4facfe] rounded-full filter blur-[128px] opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f2fe] rounded-full filter blur-[128px] opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />
      
      <motion.div 
        className="container mx-auto flex flex-col lg:flex-row px-5 py-24 items-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Left Column (Text Content) */}
        <motion.div 
          className="lg:flex-grow lg:w-1/2 lg:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={fadeInUp}
        >
          <motion.h1 
            className="title-font text-4xl md:text-5xl mb-10 font-bold text-white leading-tight"
            variants={fadeInUp}
          >
            IEEE is the world's largest technical organization
            <span className="block mt-2 mb-2 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
              that focuses on advancing technology
            </span>
          </motion.h1>
          
          <motion.p 
            className="mb-8 text-lg text-gray-300 leading-relaxed"
            variants={fadeInUp}
          >
            IEEE and its members inspire a global community through highly cited publications, conferences, technology standards, and professional and educational activities, envisioning a sustainable future.
          </motion.p>
          
          <motion.div 
            className="flex gap-4"
            variants={fadeInUp}
          >
            <a href="https://www.ieee.org/" target='_'>
            <motion.button 
              className="px-8 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(79,172,254,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join IEEE
            </motion.button>
            </a>
            <motion.button 
              className="px-8 py-3 text-sm font-medium rounded-full border-2 border-[#4facfe] text-[#4facfe] backdrop-blur-sm transition-all duration-300 hover:bg-[#4facfe] hover:text-white hover:shadow-[0_0_20px_rgba(79,172,254,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column (Images) */}
        <motion.div 
          className="lg:w-1/2 w-full flex flex-col md:flex-row gap-6 items-center justify-center"
          variants={fadeInUp}
        >
          {/* SASI Logo */}
          <motion.div
            className="w-full md:w-1/2 relative"
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(79,172,254,0.3)] aspect-video"
              initial={{ filter: 'brightness(0.8)' }}
              animate={{ filter: isHovered ? 'brightness(1)' : 'brightness(0.8)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4facfe]/20 to-transparent opacity-0 transition-opacity duration-300"
                animate={{ opacity: isHovered ? 1 : 0 }}
              />
              <img
                className="w-full h-full object-contain p-4"
                alt="SASI Institute"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZBSpD-pLvZ5xHrxkkFVOiHKicybQ79e79zQ&s"
              />
            </motion.div>
          </motion.div>

          {/* IEEE Logo */}
          <motion.div
            className="w-full md:w-1/2 relative"
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(79,172,254,0.3)] aspect-video"
              initial={{ filter: 'brightness(0.8)' }}
              animate={{ filter: isHovered ? 'brightness(1)' : 'brightness(0.8)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4facfe]/20 to-transparent opacity-0 transition-opacity duration-300"
                animate={{ opacity: isHovered ? 1 : 0 }}
              />
              <img
                className="w-full h-full object-contain p-4"
                alt="IEEE Logo"
                src="https://1000logos.net/wp-content/uploads/2019/03/IEEE-emblem.jpg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default HeroSection;
