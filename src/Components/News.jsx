import React, { useEffect, useState } from "react";

const NEWS_API_KEY = "FsO7SuZ3yhPN5Eg3b07Qx6DXvw4a1hh4QHniuJXf"; // Replace with your key

const News = ({ query }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.marketaux.com/v1/news/all?symbols=${query}&filter_entities=true&limit=5&api_token=${NEWS_API_KEY}`
        );
        const data = await response.json();

        if (!data.data || data.data.length === 0) {
          throw new Error("No news found.");
        }

        setNews(data.data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchNews();
  }, [query]);

  return (
    <div className="w-full bg-[#232323] text-white p-6 rounded-lg shadow-md max-h-[500px] overflow-auto border border-gray-700 mt-5">
      <h3 className="text-xl font-bold mb-3">Latest News</h3>
      {loading && <p className="text-gray-400">Loading news...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {news.length > 0 ? (
        <ul>
          {news.map((article, index) => (
            <li key={index} className="mb-4">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-400">{article.source} • {new Date(article.published_at).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No recent news available.</p>
      )}
    </div>
  );
};

export default News;
