import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/patildheeraj">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/dheeraj-c-patil">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/Dheeraj_2017">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/dheeraj_patil_15/">
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/dheeraj.patil.758737"
                target="_blank"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Dheeraj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Developer 😎",
                    1000,
                    "React/Redux Developer 🌐",
                    1000,
                    "MERN Stack Developer 💻",
                    1000,
                    "PHP Developer 🔴",
                    1000,
                    "Laravel Developer 🌐",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and backend
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a
              href="Dheeraj_Patil_Resume.pdf"
              download="Dheeraj_Patil_Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
