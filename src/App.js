import React, { Fragment, useState } from "react";
import "./scss/style.scss";
import logo from "./assets/images/Logo.svg";
import basket from "./assets/images/basket.svg";
import profile from "./assets/images/profile.svg";
import quote from "./assets/images/quote.svg";
import bestLinen from "./assets/images/best-linen.jpg";
import classicCut from "./assets/images/classic-cut.jpg";
import sustainable from "./assets/images/Sustainable.jpg";
import SingleQuality from './components/SingleQuality';

const App = () => {
  
  const [input, setInput] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    input.length
      ? alert("Thanks for Subscribing !")
      : alert("Please enter your Email.");
  };

  return (
    <Fragment>
      <header>
        <nav>
          <div className="center-header">
            <a href="/shop">Shop</a>
            <img src={logo} alt="Dundas\'s logo" />
            <a href="/discover">Discover</a>
          </div>
          <div className="left-header">
            <img id="profile-logo" src={profile} alt="profile logo" />
            <div id="cart-div">
              <img id="basket-logo" src={basket} alt="basket logo" />
            </div>
          </div>
        </nav>
      </header>

      <main>
        <article>
          <section className="hero-banner">
            <h5>100% Sustainably Sourced Linen</h5>
            <h1>for the love of linen</h1>
            <div className="button">
              <a href="https://yyt.dev/">discover</a>
            </div>
          </section>

          <section className="categories">
            <a id="classic" href="/classic">
              <p>classic</p>
            </a>

            <a id="safari" href="/safari">
              <p>safari</p>
            </a>

            <a href="/mandarin" id="mandarin">
              <p id="italic-mandarin">Shop</p>
              <p id="black-mandarin">mandarin</p>
            </a>
          </section>

          <div className="border" />

          <section
            className="carousel"
            data-flickity='{ "autoPlay": true, "groupCells": true  }'
          >
            <div className="carousel-cell">
              <img src={quote} alt="quote" />
              <p className="italic quote">
                As a man who wears Linen all year round Dundas London shirts are
                a staple in my wardrobe, crisply ironed or pulled out of a
                rucksack they wear well.
              </p>
              <p className="author">
                Robbie Honey — Author and Botanical Adventurer
              </p>
            </div>

            <div className="carousel-cell">
              <img src={quote} alt="quote" />
              <p className="italic quote">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id ligula porta felis euismod semper.
              </p>
              <p className="author">
                Robbie Honey — Author and Botanical Adventurer
              </p>
            </div>
          </section>

          <div className="border" />

          <section className="quality">
            <div className="quality-div">
            
            <SingleQuality image={bestLinen} title={'Best Linen'} 
            description={`Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum
            id ligula porta felis euismod semper.`} />

            <SingleQuality image={classicCut} title={'Classic Cut'} 
            description={`Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum
            id ligula porta felis euismod semper.`} />

            <SingleQuality image={sustainable} title={'Sustainable'} 
            description={`Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum
            id ligula porta felis euismod semper.`} />

            </div>
            <div className="button">
              {" "}
              <a href="/shop">shop</a>
            </div>
          </section>
        </article>
        <div className="border" />
        <p className="italic" id="alone">
          Free Delivery on all UK Mainland Orders
        </p>
      </main>

      <footer>
        <section>
          <div id="first-section" className="footer-section">
            <p className="footer-title">Shop</p>
            <div>
              <a href="/classic">Classic</a>
              <a href="/safari">Safari</a>
              <a href="/mandarin">Mandarin</a>
            </div>
          </div>

          <div id="second-section" className="footer-section">
            <p className="footer-title">Dundas</p>
            <div>
              <a href="/our-story">Our Story</a>
              <a href="/news">News</a>
              <a href="/discover">Discover</a>
              <a href="/partnerships">Partnerships</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div id="third-section" className="footer-section">
            <p className="footer-title">Help</p>
            <div>
              <a href="/tc">T&C's</a>
              <a href="/return">Returns & Exchange</a>
              <a href="/delivery">Delivery</a>
              <a href="/care">Care & Cleaning</a>
              <a href="/privacy">Privacy policy</a>
            </div>
          </div>

          <div id="form-section">
            <p className="italic form-title">
              Sign up for all the latest news & offers
            </p>
            <form onSubmit={e => onSubmit(e)}>
              <input
                type="email"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Your Email Adress"
              />
              <button>></button>
            </form>
            <div>
              <i className="fab is fa-instagram" />
              <i className="fab is fa-twitter" />
              <i className="fab is fa-facebook" />
            </div>
          </div>
        </section>
        <div className="bottom-footer">
          <p>©2019, Dundas London</p>
          <div className="payments">
            <i className="fab fa-cc-mastercard" />
            <i className="fab fa-cc-visa" />
            <i className="fab fa-cc-paypal" />
            <i className="fab fa-cc-amex" />
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default App;
