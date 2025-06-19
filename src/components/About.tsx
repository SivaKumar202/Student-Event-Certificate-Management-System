import { FaGraduationCap, FaBook, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className=" bg-black py-16 px-6 md:px-20 min-h-screen">
      <div className="max-w-5xl mx-auto text-center mt-10">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-bold text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Our Student Hub
        </motion.h2>
        <p className="text-white mt-4 text-xl">
          A platform designed to empower students with resources, collaboration, and growth opportunities.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Feature 1 */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaGraduationCap className="text-blue-500 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Learn & Grow</h3>
            <p className="text-gray-500 mt-2">
              Access a variety of courses and study materials curated for students.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaBook className="text-green-500 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Educational Resources</h3>
            <p className="text-gray-500 mt-2">
              Stay updated with the latest study guides, notes, and tutorials.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="text-purple-500 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Community & Support</h3>
            <p className="text-gray-500 mt-2">
              Connect with peers, mentors, and educators to enhance your learning experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
