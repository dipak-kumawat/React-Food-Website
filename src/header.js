import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    // Pass the query to the parent component or perform any other action
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="fas fa-search"
        id="search-icon"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}

function Search() {
  const handleSearch = (query) => {
    // Perform search or filtering based on the query
    // console.log("Searching for:", query);
    // Example: You can update state or perform any other action here
  };
  console.log(handleSearch);

  return (
    <div>
      <h1>Search Example</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Other components or content */}
    </div>
  );
}

const Header = () => (
  <header>
    <a href="#" className="logo">
      <i className="fa-solid fa-utensils"></i>FoodHub
    </a>

    <div className="navbar">
      <a className="active" href="#home">
        home
      </a>
      <a href="#dishes">dishes</a>
      <a href="#about">about</a>
      <a href="#menu">menu</a>
      <a href="#review">review</a>
      <a href="#order">order</a>
      <a href="/feedback/feedbackform1.html">Feedback</a>
    </div>

    {/* <div className="icons">
      <i className="fas fa-bars" id="menu-bars"></i>
      <i className="fas fa-search" id="search-icon"></i>
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-shopping-cart" id="bars"></a>
    </div> */}
    <Search />
  </header>
);

export default Header;
