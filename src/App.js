import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import './index.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      <Analytics /> 
      <Newsletter />
      <Cards />

      
    </div>
  );
}

export default App;
