import React, { useEffect, useState, useCallback } from "react";
import API_KEY from "./api";
import Dashboard from "./Dashboard";
import About from "./About";
import History from "./History";
import Graph from "./Graph";
import News from "./News";

const Home = () => {
  const [query, setQuery] = useState("");
  const [stock, setStock] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStockData = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    setStock(null);
    setHistory([]);

    try {
      const url = `https://api.twelvedata.com/quote?symbol=${query}&apikey=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.code || !data.symbol) {
        setError("Stock not found!");
        setLoading(false);
        return;
      }

      setStock({
        symbol: data.symbol,
        name: data.name,
        open: data.open,
        high: data.high,
        low: data.low,
        price: data.close,
        volume: data.volume,
        previousClose: data.previous_close,
        change: data.change,
        changePercent: data.percent_change,
        exchange: data.exchange,
        logo: `https://logo.clearbit.com/${data.name.toLowerCase().replace(/\s+/g, '')}.com`,
      });

      const historyUrl = `https://api.twelvedata.com/time_series?symbol=${query}&interval=1day&outputsize=10&apikey=${API_KEY}`;
      const historyResponse = await fetch(historyUrl);
      const historyData = await historyResponse.json();

      if (historyData.values) {
        setHistory(historyData.values);
      }
    } catch (err) {
      setError("Error fetching stock data. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#181818] text-gray-100">
      <Dashboard query={query} setQuery={setQuery} fetchStockData={fetchStockData} handleKeyDown={(e) => e.key === "Enter" && fetchStockData()} />
      {loading && <p className="text-center mt-5 text-lg">Fetching data...</p>}
      {error && <p className="text-center mt-5 text-red-500">{error}</p>}
      {stock ? (
        <>
        <div className="flex flex-col lg:flex-row justify-center gap-8 px-6 mt-10">
            <About stock={stock} />
            <History history={history} />
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 px-6 mb-8 mt-8">
            <Graph query={query} />
            <News query={query} />
          </div>
        </>
        ) : (
        <p className="text-center text-gray-500 text-lg mt-10">Search for a stock to see details</p>
        )}
        <footer className="w-full text-center py-4 bg-[#1e1e1e] text-white ">
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        </footer>

    </div>
  );
};

export default Home;
