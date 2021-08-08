import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import MapPage from './pages/map';
import About from './pages/about';
import Shops from './pages/shops/index';
import Events from './pages/events';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import Home from './pages';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/map' exact component={MapPage} />
        <Route path='/events' component={Events} />
        <Route path='/about' component={About} />
        <Route path='/shops' component={Shops} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
