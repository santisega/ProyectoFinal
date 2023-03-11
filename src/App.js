import React from 'react';

import './assets/css/normalize.min.css';
import './assets/css/styles.min.css';

import Footer from './components/layout/footer';
import MainNavigation from './components/share/mainNav';

function App() {

return (
  <div className="main-wrapper">
    <MainNavigation />             
    <Footer/>
  </div>
  ) ;
}

export default App;






