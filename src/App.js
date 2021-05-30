import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Banner from './Components/Layout/Banner';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';
import './App.scss';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Banner />
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
