import React, { Fragment, useState } from 'react';
import Header from './Components/Layout/Header';
import Banner from './Components/Layout/Banner';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import './App.scss';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Banner />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
