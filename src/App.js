import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Team from './components/Team';
import Work from './components/Work';
import Services from './components/Services';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Contact from './components/Contact';




function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Team />
      <Work />
      <Services />
      <Feature />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
