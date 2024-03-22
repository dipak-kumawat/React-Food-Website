const About = () => {
  return (
    <section className="about" id="about">
      <h3 className="sub-heading">about us</h3>
      <h1 className="heading">Why choose us?</h1>

      <div className="row">
        <div className="image">
          <img src="./images/asset 403.avif" alt="" />
        </div>

        <div className="content">
          <h3>Best food in the country</h3>
          <p>
            Welcome to FoodHub - your go-to spot for amazing food, anytime!
            We're all about deliciousness, quick deliveries, and making sure
            you're thrilled with every bite.
          </p>
          <p>
            At FoodHub, we're not just about delivering food – we're about
            delivering happiness to your taste buds. Come on board, place your
            order, and get ready for a flavorful journey that's convenient and
            oh-so-delicious!
          </p>
          <div className="icons-container">
            <div className="icons">
              <i className="fas fa-shipping-fast"></i>
              <span>free delivary</span>
            </div>
            <div className="icons">
              <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
              <span>easy payments</span>
            </div>
            <div className="icons">
              <i className="fas fa-headset"></i>
              <span>24/7 services</span>
            </div>
          </div>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;