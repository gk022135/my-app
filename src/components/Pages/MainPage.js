import React from "react";
import { Link } from "react-router-dom"; // Assuming React Router is being used
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="logo.png" alt="Logo" className="logo" />
          <span className="brand-name">MyWebsite</span>
        </div>
        <div className="navbar-right">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
        </div>
      </nav>

      {/* Main Body */}
      <div className="body-content">
        <p className="description">
          Welcome to our website! We offer a variety of services to meet your needs. Explore our platform and discover how we can help you achieve your goals.
        </p>
        <div className="image-gallery">
          <img src="image1.jpg" alt="Gallery Image 1" className="gallery-image" />
          <img src="image2.jpg" alt="Gallery Image 2" className="gallery-image" />
          <img src="image3.jpg" alt="Gallery Image 3" className="gallery-image" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;