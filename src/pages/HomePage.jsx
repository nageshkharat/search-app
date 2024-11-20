import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white">
  <Navbar />
  <div className="mb-6">
  <img
    src={require("../assets/coloured.png")} 
    alt="Company Logo" 
  />

  <div className="center">
    {/* <h1 className="text-4xl font-extrabold mb-6 text-blue-800">Search Users</h1> */}
    <input
      type="text"
      className="search-bar-home"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleSearch}
      style={{ width: "195%", marginLeft:"0px", padding: "0.5rem", fontSize: "1.25rem" }}
  // className="border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  </div>
</div>

  );
};

export default HomePage;
