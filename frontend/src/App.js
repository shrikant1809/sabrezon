import { BrowserRouter, Routes} from 'react-router-dom' ;
import HomeScreen from './screens/ProductScreen';


import ProductScreen from './screens/HomeScreen';






function App() {
    return (
      <BrowserRouter>
      <div className="grid-container">
              <header className="row">
                  <div>
                      <a className="brand" href="/"> amazona </a>
                  </div>
                  <div>
                      <a href="/cart">Cart </a>
                      <a href="/signin">Sign In  </a>
                  </div>
  
              </header>
              <main> 
              <Routes path="/product/:id" component={ProductScreen}> </Routes>
              <Routes path="/" component = {HomeScreen} exact>      </Routes>
                
              
                           </main>
                           <footer className="row center">
                           All rights reserved
  
              </footer>
  
          </div>
          </BrowserRouter>
      
    );
  }
  
  export default App;
  