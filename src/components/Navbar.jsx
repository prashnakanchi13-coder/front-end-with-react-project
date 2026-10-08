function Navbar({ activePage, setActivePage }) {
  return (
    <nav>
      <div className="container">
        <button 
          onClick={() => setActivePage('home')} 
          className="logo"
        >
          NewsPoint
        </button>
        <div className="nav-links">
          <button 
            onClick={() => setActivePage('home')} 
            className={activePage === 'home' ? 'active' : ''}
          >
            Home
          </button>
          <button 
            onClick={() => setActivePage('latest')} 
            className={activePage === 'latest' ? 'active' : ''}
          >
            Latest News
          </button>
          <button 
            onClick={() => setActivePage('about')} 
            className={activePage === 'about' ? 'active' : ''}
          >
            About
          </button>
          <button 
            onClick={() => setActivePage('contact')} 
            className={activePage === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;