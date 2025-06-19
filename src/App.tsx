import About from "./components/About";
// import CertificateGenerator from "./components/Certifcate";
import CertificateForm from "./components/Certifcate"
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import TeamSection from "./components/TeamSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/team-members" element={<TeamSection />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Login" element={<Login />} />
      <Route path="/Download" element={<CertificateForm />} />
      <Route path="/Contact" element={<Contact /> }/>
      <Route path="/about" element={<About /> }/>
    </Routes>
    </Router>

    </>

  );
}

export default App;