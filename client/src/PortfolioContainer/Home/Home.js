import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div className="home-container" id="Home">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
