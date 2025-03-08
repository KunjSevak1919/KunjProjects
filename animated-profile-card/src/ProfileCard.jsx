import "./ProfileCard.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../src/assets/profile.jpeg";

const ProfileCard = () => {
  return (
    <div className="container">
    <div className="card">
      <img src={profilePic} alt="Kunj Sevak" className="profile-pic" />
      <h2>Kunj Sevak</h2>
      <p className="role">Senior Year Student | Developer | Tech Enthusiast</p>
      <p className="bio">
        Passionate about building scalable web apps and optimizing performance.  
        Experienced in **Frontend (React, Next.js, Tailwind)** and **Backend (Node.js, Express, MongoDB)**.  
        Love working on **full-stack projects**, UI/UX design, and Problem Solving Skills.
      </p>
      <div className="buttons">

        <a href="/resume.pdf" download className="resume-btn">📄 View Resume</a>
        <a href="https://github.com/KunjSevak" target="_blank" className="github-btn"><FaGithub/> GitHub</a>
        <a href="https://www.linkedin.com/in/kunj-sevak-613923252/" target="_blank" className="linkedin-btn"><FaLinkedin/>linkedin </a>
</div>
       

       {/* New Section for Projects */}
  <div className="projects-section">
    <h3>Recent Academic Projects</h3>
    <div className="projects-grid">
      <div className="project-card">FullStack Banking Web Application</div>
      <div className="project-card">FileSystem-Linux</div>
      <div className="project-card">Employee Attendance Tracker-DBMS</div>
    </div>
  </div>
      </div>
    </div>
  );
};

export default ProfileCard;