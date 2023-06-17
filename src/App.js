import './App.css';
import Header from './components/Header';
import Allproducts from './components/Allproducts';
import { BrowserRouter,HashRouter,Link,Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Cart from './components/Cart';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <>
    <BrowserRouter basename='/Celemart'>
    <HashRouter>
    <Routes>
      <Route exact path='/' element={
        <>
        <Header/>
        <Allproducts addToCart={addToCart}/>
        </>
      }></Route>
      <Route path='/cart' element={
        <>
        <Header/>
        <Cart cartItems={cartItems}/>
        </>
      }></Route>
    </Routes>
    </HashRouter>
    </BrowserRouter>
    </>
  );
}

export default App;
