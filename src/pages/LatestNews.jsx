import { newsData } from "../data/newsData";
import NewsCard from "../components/NewsCard";

function LatestNews({ onSelectNews }) {
  return (
    <div className="container">
      <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "1.5rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.5rem" }}>
        Latest News
      </h1>
      <div className="news-grid">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} onSelectNews={onSelectNews} />
        ))}
      </div>
    </div>
  );
}

export default LatestNews;