function NewsCard({ news, onSelectNews }) {
  return (
    <div className="news-card">
      <img src={news.image} alt={news.title}
       onError={(e) => {
         // A clean SVG fallback that will NEVER break even without internet
        e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='100%' height='100%' fill='%23e0e0e0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%23666666'>No Image Available</text></svg>";
         }}
      />
      <div className="news-card-body">
        <div className="news-card-meta">
          <span className="badge">{news.category}</span>
          <span>{news.date}</span>
        </div>
        <h2 className="news-card-title">{news.title}</h2>
        <p className="news-card-summary">{news.summary}</p>
        <div className="news-card-footer">
          <span>By {news.author}</span>
          <button 
            onClick={() => onSelectNews(news.id)} 
            className="btn-link" >
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;