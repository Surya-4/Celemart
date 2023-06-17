import './App.css';
import Header from './components/Header';
import Allproducts from './components/Allproducts';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Cart from './components/Cart';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={
        <>
        <Header/>
        <Allproducts addToCart={addToCart}/>
        </>
      }></Route>
      <Route exact path='/cart' element={
        <>
        <Header/>
        <Cart cartItems={cartItems}/>
        </>
      }></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
