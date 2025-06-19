import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com/ieee" },
    { icon: FaTwitter, href: "https://twitter.com/ieee" },
    { icon: FaLinkedinIn, href: "https://linkedin.com/company/ieee" },
    { icon: FaInstagram, href: "https://instagram.com/ieee" },
    { icon: FaGithub, href: "https://github.com/ieee" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <motion.footer
      className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-gray-300 py-12 relative overflow-hidden"
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
    >
      {/* Animated background blur effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-[#4facfe] rounded-full filter blur-[128px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00f2fe] rounded-full filter blur-[128px] opacity-10"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Description Section */}
          <motion.div {...fadeInUp} className="space-y-6">
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg"
              alt="IEEE Logo"
              className="h-12 w-auto brightness-0 invert"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-gray-400 leading-relaxed">
              IEEE is the world's largest technical professional organization
              dedicated to advancing technology for the benefit of humanity.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div {...fadeInUp} className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.name}
                    </motion.span>
                    <motion.div className="h-[1px] w-0 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] ml-2 group-hover:w-12 transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links Section */}
          <motion.div {...fadeInUp} className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <p>
              <b>Sasi Institute of Technology & Engineering,</b>
              <br />
              Sasi Road, Near Aerodrome,Tadepalligudem,
              <br />
              West Godavari District, <br />
              Andhra Pradesh, India-534101
            </p>
            <p>
              <a
                href="tel:+918074480076"
                className="flex items-center space-x-2  text-blue-400  hover:text-red-600"
              >
                <FaPhone />
                <span>+91 8074480076</span>
              </a>
              <br />
              <a
                href="mailto:sasi_ite@sasi.ac.in"
                className="flex items-center space-x-2 text-blue-400  hover:text-red-600"
              >
                <FaEnvelope />
                <span>sasi_ite@sasi.ac.in</span>
              </a>
              <br />
              <a
                href="https://www.sasi.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2  text-blue-400  hover:text-red-600"
              >
                <FaGlobe />
                <span>https://www.sasi.ac.in/</span>
              </a>
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r from-[#4facfe] to-[#00f2fe] transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
          {...fadeInUp}
        >
          <p>
            {" "}
            Copyright © {currentYear} Sasi Institute of Technology and
            Engineering
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
