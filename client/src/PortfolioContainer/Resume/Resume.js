import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Redux", ratingPercentage: 85 },
    { skill: "Laravel", ratingPercentage: 89 },
    { skill: "PHP", ratingPercentage: 89 },
    { skill: "MySQL", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "Nov-2021 ", toDate: " Dec-2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, JavaScript Bootstrap,HTML, CSS",
    },
    {
      title: "E-commerce Website ",
      duration: { fromDate: "March-2021 ", toDate: " June-2021" },
      description:
        "Online E-commerce website for showcasing and selling products online with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used:  Laravel, PHP, Javascript, jQuery, Bootstrap, MySQL, HTML, CSS.",
    },
    {
      title: "Students Monitoring System ",
      duration: { fromDate: "March-2019 ", toDate: " Nov-2020" },
      description:
        "This project is based on the stored the record of student attendance. In which teacher can take the attendance then automatically calculate percentage of attendance of every student",
      subHeading:
        "Technologies Used:  ASP.NET, C#, SQL Server, Javascript, Bootstrap, HTML, CSS.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Bachelor of Engineering (CSE)"}
        subHeading={"Sant Gadge Baba Amravati University"}
        fromDate={"2016"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"Higher Secondary School"}
        subHeading={"Adarsh Vidhya Peeth H. S. School, Burhanpur"}
        fromDate={"2015"}
        toDate={"2016"}
      />
      <ResumeHeading
        heading={"Senior Secondary School "}
        subHeading={"Adarsh Vidhya Peeth H. S. School, Burhanpur"}
        fromDate={"2013"}
        toDate={"2014"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"NeoSOFT Technologies"}
          subHeading={"Software Engineer"}
          fromDate={"Jan-2021 "}
          toDate={" Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as React Js and Laravel developer and also spent
            some time to self learning.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an E-commerce website for training with the dashboard
            for managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the react js module with API services to explore my
            knowledge to implement concept in real projects.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that I can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in cricket games, pushing the rank and having interactive gaming sessions excites me the most."
      />
      <ResumeHeading
        heading="Cooking"
        description="Apart from being a tech enthusiast and a code writer, I also love to cooking in some free time."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
