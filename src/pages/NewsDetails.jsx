import { newsData } from "../data/newsData";

function NewsDetails({ newsId, setActivePage }) {
  const news = newsData.find((item) => item.id === parseInt(newsId));

  if (!news) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "2rem 0" }}>
        <h2>Article Not Found</h2>
        <button 
          onClick={() => setActivePage('home')} 
          className="btn-link"
          style={{ marginTop: "1rem" }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <button 
        onClick={() => setActivePage('home')} 
        className="btn-link"
        style={{ marginBottom: "1rem" }}
      >
        ← Back to Home
      </button>
      <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "0.75rem" }}>
        {news.title}
      </h1>
      <div style={{ display: "flex", gap: "1rem", fontSize: "0.85rem", color: "#64748b", marginBottom: "1.5rem" }}>
        <span>By {news.author}</span>
        <span>•</span>
        <span>{news.date}</span>
        <span>•</span>
        <span style={{ color: "#2563eb", fontWeight: "500" }}>{news.category}</span>
      </div>
      <img 
        src={news.image} 
        alt={news.title} 
        style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "8px", marginBottom: "1.5rem" }} 
      />
      <p style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "#334155" }}>
        {news.content}
      </p>
    </div>
  );
}

export default NewsDetails;