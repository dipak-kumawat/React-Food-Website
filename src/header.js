
const Search =()=>(
    
        <form action="" id="search-form">
        <input type="search" placeholder="Search here...." name="" id="search-box"/>
        <label for="search-box" className="fas fa-search"></label>
        <i className="fas fa-times" id="close"></i>
        </form>
    
);
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

    <div className="icons">
      <i className="fas fa-bars" id="menu-bars"></i>
      <i className="fas fa-search" id="search-icon"></i>
      <a href="#" className="fas fa-heart"></a>
      <a href="#" className="fas fa-shopping-cart" id="bars"></a>
    </div>
  </header>
);

export default Header;
