import React, { useState } from "react";

const History = ({ history }) => {
  const [days, setDays] = useState(7);

  const filteredHistory = history.slice(0, days);

  return (
    <div className="w-full md:w-[48%] bg-[#232323] text-white p-6 rounded-lg shadow-md max-h-[600px] overflow-auto border border-gray-700">
      {/* Title & Dropdown */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold">Stock History</h3>
        <select
          value={days}
          onChange={(e) => setDays(parseInt(e.target.value))}
          className="bg-gray-800 text-white border border-gray-600 rounded-md px-2 py-1 text-sm focus:outline-none"
        >
          <option value="3">Last 3 Days</option>
          <option value="5">Last 5 Days</option>
          <option value="7">Last 7 Days</option>
          <option value="10">Last 10 Days</option>
        </select>
      </div>

      {/* Stock History Table */}
      <div className="overflow-auto">
        <table className="w-full text-left border border-gray-700">
          <thead>
            <tr className="border-b border-gray-500 bg-gray-800 text-gray-300">
              <th className="py-2 px-4">Date</th>
              <th className="py-2">Open</th>
              <th className="py-2">High</th>
              <th className="py-2">Low</th>
              <th className="py-2">Close</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.map((day, index) => (
              <tr key={index} className="border-b border-gray-600 text-sm">
                <td className="py-2 px-4">{day.datetime}</td>
                <td className="py-2">${day.open}</td>
                <td className="py-2">${day.high}</td>
                <td className="py-2">${day.low}</td>
                <td className="py-2 font-bold">
                  {day.close < day.open ? <span className="text-red-500">🔻 ${day.close}</span> : <span className="text-green-500">🔺 ${day.close}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
