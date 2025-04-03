import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const API_KEY = "baf6f9207e00497d9777ac6fcea3aabe";

const Graph = ({ query }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchGraphData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.twelvedata.com/time_series?symbol=${query}&interval=1day&outputsize=30&apikey=${API_KEY}`
        );
        const data = await response.json();

        if (!data.values) {
          throw new Error("No data found.");
        }

        // Format the data for the chart
        const formattedData = data.values.map(item => ({
          date: item.datetime,
          open: parseFloat(item.open),
          high: parseFloat(item.high),
          low: parseFloat(item.low),
          close: parseFloat(item.close),
        })).reverse(); // Reverse to show oldest data first

        setChartData(formattedData);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchGraphData();
  }, [query]);

  return (
    <div className="w-full bg-[#232323] text-white p-6 rounded-lg shadow-md border border-gray-700 mt-5">
      <h3 className="text-xl font-bold mb-3">Stock Price Chart</h3>
      {loading && <p className="text-gray-400">Loading chart...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="date" tick={{ fill: "#fff" }} label={{ value: "Date", position: "insideBottom", fill: "#fff" }} />
            <YAxis tick={{ fill: "#fff" }} label={{ value: "Price (USD)", angle: -90, position: "insideLeft", fill: "#fff" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="open" stroke="#ffcc00" strokeWidth={2} dot={false} name="Open Price" />
            <Line type="monotone" dataKey="high" stroke="#00ff00" strokeWidth={2} dot={false} name="High Price" />
            <Line type="monotone" dataKey="low" stroke="#ff0000" strokeWidth={2} dot={false} name="Low Price" />
            <Line type="monotone" dataKey="close" stroke="#4a90e2" strokeWidth={3} name="Close Price" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-400">No chart data available.</p>
      )}
    </div>
  );
};

export default Graph;
