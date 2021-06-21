import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import React, { useState } from 'react';

function App() {

  const [homeSelected, setHomeSelected] = useState(true);

  return (
    <div> 
      <Header
        setHomeSelected = {setHomeSelected}
        homeSelected ={homeSelected}
      ></Header>
      <main>
        <About></About>
       
      </main>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
