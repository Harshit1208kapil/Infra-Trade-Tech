import React from "react";

const About = ({ stock }) => {
  return (
    <div className="w-full md:w-[48%] bg-[#232323] text-white p-6 rounded-lg shadow-md max-h-[600px] overflow-auto border border-gray-700">
      <div className="flex flex-col items-center">
        <img
          src={stock.logo}
          alt={`${stock.name} Logo`}
          className="w-24 h-24 mb-3 rounded-lg shadow-md"
          onError={(e) => (e.target.style.display = "none")}
        />
        <h2 className="text-3xl font-semibold">{stock.name} ({stock.symbol})</h2>
        <p className="text-lg text-gray-400 mt-1">Exchange: {stock.exchange}</p>
        <p className="text-2xl font-bold mt-3">${stock.price}</p>
        <p className="text-lg mt-1">
          Change:{" "}
          {stock.change < 0 ? (
            <span className="text-red-500">🔻{stock.change} ({stock.changePercent}%)</span>
          ) : (
            <span className="text-green-500">🔺{stock.change} ({stock.changePercent}%)</span>
          )}
        </p>
      </div>

      <hr className="my-3 border-gray-500 w-full" />
      <div className="text-xl">
        <p className="my-3">Open: ${stock.open}</p>
        <p className="my-3">High: ${stock.high}</p>
        <p className="my-3">Low: ${stock.low}</p>
        <p className="my-3">Previous Close: ${stock.previousClose}</p>
        <p className="my-3">Volume: {stock.volume}</p>
      </div>
    </div>
  );
};

export default About;
