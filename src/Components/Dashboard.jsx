import React from "react";
import { FaSearch } from "react-icons/fa";

const Dashboard = ({ query, setQuery, fetchStockData, handleKeyDown }) => {
  return (
    <div className="w-full bg-[#1e1e1e] text-white py-6 px-6 shadow-lg">
      <h1 className="text-6xl font-bold text-center mb-5 text-amber-500 italic">Infra Trade Tech</h1>
      <p className="text-gray-400 text-lg text-center mb-5">Real-time stock market insights</p>

      {/* Search Box */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for a stock (AAPL, TSLA, etc.)"
            className="w-full p-3 pl-12 text-white rounded-md border-2 border-[#4a90e2] bg-[#222] focus:ring-2 focus:ring-[#4a90e2] focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="absolute left-3 top-3 text-[#4a90e2] text-lg"
            onClick={fetchStockData}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
