
function App() {
  return (
    
    <div className="grid-container">
    <header className="row">
      <div>
        <a  className= "brand" href="index.html">amazona</a>
      </div>
      <div>
        <a href="cart.html">cart</a>
        <a href="Signin.html">Sign In </a>
      </div>
      
    </header>
    <main>
      <div className="row center">
        {
          data.products.map(product =>(
            <div className="card">
          <a href="product.html"> <img className="medium" src="./images/p1.jpg" alt="product" /> </a>
          <div className="card-body">
            <a href="product.html"> <h2> {product.name } </h2> </a>
            <div className="rating">
              <span> <i className="fa fa-star"> </i> </span> 
              <span> <i className="fa fa-star"> </i> </span> 
              <span> <i className="fa fa-star"> </i> </span> 
              <span> <i className="fa fa-star"> </i> </span> 
              <span> <i className="fa fa-star"> </i> </span> 
            </div>
            <div className="price"> Rs120 </div>
          </div>
        </div>

          )
          )
        }
        
        

                  


      </div>

    </main>
    <footer className="row center">
      All right reserved
      
    </footer>
  </div>

  );
}


