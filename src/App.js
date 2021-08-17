import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About'
import Home from './components/Home/Home';
import Stories from './components/Stories/Stories';
import Contact from './components/Contact/Contact';
import Kindwords from './components/Kind-words/Kindwords';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Boho from './components/Boho/Boho';
import React from 'react';
import {Switch, Route } from "react-router-dom";


function App() {


  return (
    <div> 
      <Header></Header>
      <main>
        <Switch>
          <Route exact path="/misa-wedding-site" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Kind-words" component={Kindwords} />
          <Route path="/Stories" component={Stories} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Boho" component={Boho} />
        </Switch>
       
      </main>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
