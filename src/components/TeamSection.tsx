import { motion } from 'framer-motion';
import Madhu from '../images/Madhu.jpeg';
import Abhishek from '../images/Abhishek.jpeg'
import Geetha from '../images/Geetha.jpeg';
import Hema from '../images/Hema sri.jpeg';
import Keerthi from '../images/Keerthi sri.jpeg';
import Madhuri from '../images/Madhuri.jpeg';
import Monika from '../images/Monika.jpeg';
import Rajeswari from '../images/Rajeswari.jpeg';
import Rishitha from '../images/Rishitha.jpeg';
import Srimannaarayana from '../images/Srimannaarayana.jpeg';
import Tarun from '../images/Tarun reddy.jpeg';
import Venkateswarao from '../images/Venkateswarao.jpeg'

const TeamSection = () => {
  const teamMembers = [
    {
      name: "A Madhu Kiran",
      role: "Chairman",
      img: Madhu,
      IEEE_ID:"100999176",
      linkedin: "#",
    },
    { 
      name: "A. Monika Devi", 
      role: "Vice-Chairman", 
      img: Monika,
      IEEE_ID:"101006556",
      linkedin: "#",
    },
    {
      name: "G. Tarun Reddy",
      role: "Web master",
      img: Tarun,
      IEEE_ID:"100990663",
      linkedin: "#",
    },
    { 
      name: "M. Abhishek", 
      role: "Treasurer", 
      img: Abhishek,
      IEEE_ID:"101056520",
      linkedin: "#",
    },
    {
      name: "P. Rajeswari",
      role: "Secretary",
      img: Rajeswari,
      IEEE_ID:"101056976",
      linkedin: "#",
    },
    {
      name: "Ch. Rishitha",
      role: "Ex-com Member",
      img: Rishitha,
      IEEE_ID:"101006748",
      linkedin: "#",
    },
    {
      name: "Ch. Keerthi Sri",
      role: "Ex-com Member",
      img:  Keerthi,
      IEEE_ID:"101012293",
      linkedin: "#",
    },
    {
      name: "B. Madhuri ",
      role: "Event Organizer",
      img: Madhuri,
      IEEE_ID:"101006701",
      linkedin: "#",
    },
    {
      name: "Ch. Venkateswara Rao ",
      role: "Ex-com (Institute level)",
      img: Venkateswarao,
      IEEE_ID:"101013208",
      linkedin: "#",
    },
    {
      name: "B Geetha Sai ",
      role: "Treasure(Institute level)",
      img: Geetha,
      IEEE_ID:"101006558",
      linkedin: "#",
    },
    {
      name: "B. Hema sri varma",
      role: "Event Organizer",
      img: Hema,
      IEEE_ID:"101013178",
      linkedin: "#",
    },
    {
      name: "P. Srimannarayana",
      role: "Ex-com Member",
      img: Srimannaarayana,
      IEEE_ID:"101048566",
      linkedin: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 bg-[#4facfe] rounded-full filter blur-[128px] opacity-20"
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

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed"
          >
            Our dedicated team of professionals working together to advance technology
            and innovation in the IEEE community.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(79,172,254,0.1)]">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <motion.div
                      className="w-36 h-36 rounded-full overflow-hidden border-2 border-[#4facfe]/20 group-hover:border-[#4facfe]/40 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover filter  hover: transition-all duration-300"
                      />
                    </motion.div>
                    <div className="absolute -bottom-2 -right-2 bg-white/10 rounded-full p-1.5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 text-[#4facfe] hover:text-[#00f2fe] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#4facfe] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {member.role}
                    </p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                     <b>IEEE ID :</b> {member.IEEE_ID}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
