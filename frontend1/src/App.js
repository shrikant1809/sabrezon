//import logo from './logo.svg';
//import './App.css';
import React from 'react';

function App() {
  return (
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <a href="index.html">amazona</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onclick="closeMenu()">x</button>
      <ul>
        <li>
          <a href="index.html">Pants</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="images/p1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">shrikant industry</div>
              <div className="product-price">$57</div>
              <div className="product-rating">4.5 Stars (69 Reviews)</div>

            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/p2.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/p3.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">addidas</div>
              <div className="product-price">$81</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/p4.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">puma</div>
              <div className="product-price">$45</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/p5.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">hrx</div>
              <div className="product-price">$45</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/p6.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">drone</div>
              <div className="product-price">$99</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>

  );
}

export default App;
