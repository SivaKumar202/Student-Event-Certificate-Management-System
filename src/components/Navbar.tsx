import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goto = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/team-members", label: "Members" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About"},
    { path: "/Download", label: "Download Certificate" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1a2e]/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg"
              className="h-8 w-auto brightness-0 invert"
              alt="IEEE Logo"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              IEEE
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => goto(item.path)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-[#4facfe]"
                      : "text-gray-300 hover:text-[#4facfe]"
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4facfe]"
                      layoutId="underline"
                    />
                  )}
                </button>
              </motion.div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goto("/Signup")}
              className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full hover:shadow-[0_0_20px_rgba(79,172,254,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Sign In
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-lg p-2 text-gray-300 hover:text-[#4facfe]"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-around"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
                className="w-6 h-0.5 bg-current transform origin-center"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-6 h-0.5 bg-current"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
                className="w-6 h-0.5 bg-current transform origin-center"
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
                className="px-2 pt-2 pb-3 space-y-1 bg-[#1a1a2e]/90 backdrop-blur-lg rounded-lg mt-2"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.path}
                    whileHover={{ x: 10 }}
                    onClick={() => goto(item.path)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-[#4facfe]/10 text-[#4facfe]"
                        : "text-gray-300 hover:text-[#4facfe] hover:bg-[#4facfe]/5"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => goto("/Signup")}
                  className="w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-lg hover:shadow-[0_0_20px_rgba(79,172,254,0.3)] transition-all duration-300"
                >
                  Sign In
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
