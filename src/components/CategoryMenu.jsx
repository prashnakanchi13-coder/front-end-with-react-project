function CategoryMenu({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "Infrastructure", "Tech", "Sports", "Business"];

  return (
    <div className="category-buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;