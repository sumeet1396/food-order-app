import React, { Fragment } from 'react';
import Header from './Components/Layout/Header';
import Banner from './Components/Layout/Banner';
import Meals from './Components/Meals/Meals';
import './App.scss';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Banner />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
