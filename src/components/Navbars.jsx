import React from "react";
import logo from "../assets/logo.png";

const Navbars = ({ activeTab, setActiveTab, searchQuery, setSearchQuery }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="navbar-links">
        {activeTab !== "search" ? (
          <>
            <a
              href="#search"
              className={`navbar-link ${activeTab === "search" ? "active" : ""}`}
              onClick={() => handleTabClick("search")}
            >
              Search
            </a>
          </>
        ) : (
          <input
            type="text"
            className="navbar-search-bar"
            placeholder="Search users by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbars;
