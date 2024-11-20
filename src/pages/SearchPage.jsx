
import React, { useState } from "react";
import usersData from "../data/users.json";
import noResultsImage from "../assets/no-results.png";
import userPlaceholder from "../assets/Ellipse 2.png";
import Navbars from "../components/Navbars";
import userPlaceholder2 from "../assets/Rectangle 1.png";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState("home"); // Default tab is "home"

  const filteredUsers = usersData.filter((user) =>
    `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFetchDetails = (user) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  return (
    <div className="search-page">
      <Navbars
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {filteredUsers.length === 0 && activeTab === "search" ? (
        <div className="no-results">
          <img src={noResultsImage} alt="No results" className="no-results-image" />
          <p className="cen">No results found.</p>
        </div>
      ) : (
        <div className="user-grid">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`user-card ${selectedUser && selectedUser.id !== user.id ? "faint" : ""}`}
            >
              <img
                src={user.image || userPlaceholder}
                alt={`${user.first_name} ${user.last_name}`}
                className="user-image"
              />
              <div className="user-details">
                <p className="user-name">{user.first_name} {user.last_name}</p>
                <p className="user-city">
                  <span className="address-icon" /> {user.city}
                </p>
                <p className="user-phone">
                  <span className="phone-icon" /> {user.contact_number}
                </p>
                <p className="user-availability">Available on phone</p>
                <button className="fetch-button" onClick={() => handleFetchDetails(user)}>
                  Fetch Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedUser && (
        <div className="expanded-user">
          <h2>Fetch Details</h2>
          <p className="expanded-user-subtext">Here are the details of the following employee.</p>
          <p className="name"><strong>Name:</strong> {selectedUser.first_name} {selectedUser.last_name}</p>
          <p><strong>Location:</strong> {selectedUser.city}</p>
          <p><strong>Contact Number:</strong> {selectedUser.contact_number}</p>
          <div>
            <strong>Profile Image:</strong>
            <img src={selectedUser.image || userPlaceholder2} alt="Profile" className="profile-image" />
          </div>
          <button className="close-button" onClick={handleCloseDetails}>Close</button>
          
        </div>
      )}
    </div>
  );
};

export default SearchPage;
