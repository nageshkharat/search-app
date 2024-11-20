// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logo.png";

const Navbars = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleContactClick = () => {
    window.location.href = "mailto:contact@example.com"; // Replace with actual email
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-links">
        {activeTab !== "search" ? (
          <>
          <a
          href="search"
          className={`navbar-link ${activeTab === "search" ? "active" : ""}`}
          onClick={() => handleTabClick("search")}
        >
          Search
        </a>
            <a
              href="https://girmantech.com"
              className={`navbar-link ${activeTab === "website" ? "active" : ""}`}
              onClick={() => handleTabClick("website")}
            >
              Website
            </a>
            <a
              href="https://www.linkedin.com/company/girmantech"
              className={`navbar-link ${activeTab === "linkedin" ? "active" : ""}`}
              onClick={() => handleTabClick("linkedin")}
            >
              LinkedIn
            </a>
            <a
              href="contact@girmantech.com"
              className={`navbar-link ${activeTab === "contact" ? "active" : ""}`}
              onClick={handleContactClick}
            >
              Contact
            </a>
          </>
        ) : null}
        
      </div>
    </nav>
  );
};

export default Navbars;
