import { useState } from "react";
import { newsData } from "../data/newsData";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";
import CategoryMenu from "../components/CategoryMenu";

function Home({ onSelectNews }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featured = newsData.find((item) => item.featured) || newsData[0];

  const filteredNews = newsData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      {/* Featured News Hero */}
      <section className="featured-card">
        <img src={featured.image} alt={featured.title} />
        <div className="featured-content">
          <span className="badge">Featured</span>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.5rem 0" }}>
            {featured.title}
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "0.9rem", marginBottom: "1rem" }}>
            {featured.summary}
          </p>
          <button 
            onClick={() => onSelectNews(featured.id)} 
            className="btn-link"
            style={{ color: "#38bdf8" }}
          >
            Read Full Article →
          </button>
        </div>
      </section>

      {/* Controls Bar */}
      <div className="controls-bar">
        <CategoryMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* News Grid */}
      <div className="news-grid">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} onSelectNews={onSelectNews} />
          ))
        ) : (
          <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#64748b", padding: "2rem 0" }}>
            No news found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;