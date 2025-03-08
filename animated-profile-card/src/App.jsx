import { useState } from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import "./App.css";
import Particles from "react-tsparticles";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.div
      className={darkMode ? "App dark" : "App"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      
  

<Particles
  options={{
    particles: {
      number: { value: 50 },
      move: { speed: 1, direction: "none" },
      shape: { type: "circle" },
      size: { value: 2 },
    },
  }}
/>

<ProfileCard />
      
    </motion.div>

    
  );
}

export default App;