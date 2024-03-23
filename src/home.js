const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-slider swiper mySwipe">
        <div className="wrapper swiper-wrapper">
          <div className="slide swiper-slide">
            <div className="content">
              <span>Our special dish</span>
              <h3>Hot Pizza</h3>
              <p>
                classNameic delight with 100% real mozzarella cheese. Available in
                Cheese Burst, Wheat Thin Crust and Pan Crust options.
              </p>
              <a href="#" className="btn">
                Order Now
              </a>
            </div>
            <div className="image">
              <img src="./images/menu1.jpeg" alt="" />
            </div>
          </div>

          <div className="slide swiper-slide">
            <div className="content">
              <span>Our special dish</span>
              <h3>French Burger</h3>
              <p>
                Enjoy the tallest burgers innovated by us. Created with chunky
                juicy grilled chicken patty paired along with fresh ingredients
                like jalapeﺃ١o, onion, slice of cheese, tomatoes & crunchy
                lettuce dressed with the classNameical Habanero sauce.
              </p>
              <a href="#" className="btn">
                Order Now
              </a>
            </div>
            <div className="image">
              <img src="./images/menu2.jpeg" alt="" />
            </div>
          </div>

          <div className="slide swiper-slide">
            <div className="content">
              <span>Our special dish</span>
              <h3>Spicy combo</h3>
              <p>
                Get the best value in your meal for 2. Save big on your
                favourite sharing meal - 2 McCheese Burger Veg (with New Italian
                Herb Bun) + Fries (L) + 2 Coke.
              </p>
              <a href="#" className="btn">
                Order Now
              </a>
            </div>
            <div className="image">
              <img src="./images/menu3.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};
