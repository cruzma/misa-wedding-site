import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About'
import Home from './components/Home/Home';
import Stories from './components/Stories/Stories';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import React, { useState } from 'react';


function App() {

  const [homeSelected, setHomeSelected] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [storiesSelected, setStoriesSelected] = useState(false);
  const [servicesSelected, setServicesSelected] = useState(false);
  const [contactsSelected, setContactsSelected] = useState(false);

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
      ></Header>
      <main>
        {!aboutSelected && !storiesSelected && !servicesSelected && !contactsSelected ?(
          <>
            <Home></Home>
          </>
        ) : aboutSelected ? (
          <About></About>
        ) : servicesSelected ? (
          <Services></Services>
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
