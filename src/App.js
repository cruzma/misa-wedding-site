import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About'
import Home from './components/Home/Home';
import Stories from './components/Stories/Stories';
import Contact from './components/Contact/Contact';
import Kindwords from './components/Kind-words/Kindwords';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import React, { useState } from 'react';

function App() {

  const [homeSelected, setHomeSelected] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [storiesSelected, setStoriesSelected] = useState(false);
  const [servicesSelected, setServicesSelected] = useState(false);
  const [contactsSelected, setContactsSelected] = useState(false);
  const [KindwordsSelected, setKindwordsSelected] = useState(false);

  return (
    <div> 
      <Header
        setHomeSelected = {setHomeSelected}
        homeSelected ={homeSelected}
        aboutSelected ={aboutSelected}
        setAboutSelected = {setAboutSelected}
        storiesSelected = {storiesSelected}
        setStoriesSelected = {setStoriesSelected}
        servicesSelected = {servicesSelected}
        setServicesSelected = {setServicesSelected}
        contactsSelected = {contactsSelected}
        setContactsSelected = {setContactsSelected}
        KindwordsSelected = {KindwordsSelected}
        setKindwordsSelected = {setKindwordsSelected}
      ></Header>
      <main>
        {!aboutSelected && !storiesSelected && !servicesSelected && !contactsSelected && !KindwordsSelected ?(
          <>
            <Home></Home>
          </>
        ) : aboutSelected ? (
          <About></About>
        ) : servicesSelected ? (
          <Services></Services>
        ) : KindwordsSelected ? (
          <Kindwords></Kindwords>
        ) : storiesSelected ? (
          <Stories></Stories>
        ) : contactsSelected ? (
          <Contact></Contact>
        ) : (
          <Home></Home>
        )
        }
       
      </main>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
