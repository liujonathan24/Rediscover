import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import MapPage from './pages/map';
import About from './pages/about';
import Shops from './pages/shops/menu';
import Events from './pages/events';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import Home from './pages';
import Center from './components/Center';
import Capezio from './pages/shops/capezio';
import TeamMates_Fitness_Pilates_and_Personal_Training_Studio from "./pages/shops/TeamMates_Fitness_Pilates_and_Personal_Training_Studio";
import Singhs_Cafe from './pages/shops/singhs_cafe';

import Holy_Spirit_Catholic_Community from './pages/shops/Holy_Spirit_Catholic_Community';
import Wellesley_Hills_Center_for_Early_Education from './pages/shops/Wellesley_Hills_Center_for_Early_Education';
import Greens_Hardware_and_Paint_Inc from './pages/shops/Greens_Hardware_and_Paint_Inc';
import Maugus_Restaurant from './pages/shops/Maugus_Restaurant';
import Comellas_Restaurants from './pages/shops/Comellas_Restaurants';
import Middlesex_Savings_Bank from './pages/shops/Middlesex_Savings_Bank';
import Loyal_Companion from './pages/shops/Loyal_Companion';
import Quebrada_Baking_Company from './pages/shops/Quebrada_Baking_Company';
import Subway from './pages/shops/Subway';
import Nails_Studio from './pages/shops/Nails_Studio';
import Ideal_Barber_Shop from './pages/shops/Ideal_Barber_Shop';
import The_Cats_Hospital from './pages/shops/The_Cats_Hospital';
import Nabinas_Threading_and_Spa from './pages/shops/Nabinas_Threading_and_Spa';
import Coconut_Thai_Cafe from './pages/shops/Coconut_Thai_Cafe';
import Universal_Pediatric_Association from './pages/shops/Universal_Pediatric_Association';


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
        <Route path='/center' exact component={Center} />
        <Route path='/map' exact component={MapPage} />
        <Route path='/events' component={Events} />
        <Route path='/about' component={About} />
        <Route path='/shops/menu' component={Shops} />
        <Route path='/shops/capezio' component={Capezio} />
        <Route path='/shops/TeamMates_Fitness_Pilates_and_Personal_Training_Studio' component={TeamMates_Fitness_Pilates_and_Personal_Training_Studio} />
        <Route path='/shops/Singhs_Cafe' component={Singhs_Cafe} />

        <Route path='/shops/Holy_Spirit_Catholic_Community' component={Holy_Spirit_Catholic_Community} />
        <Route path='/shops/Wellesley_Hills_Center_for_Early_Education' component={Wellesley_Hills_Center_for_Early_Education} />
        <Route path='/shops/Greens_Hardware_and_Paint_Inc' component={Greens_Hardware_and_Paint_Inc} />
        <Route path='/shops/Maugus_Restaurant' component={Maugus_Restaurant} />
        <Route path='/shops/Comellas_Restaurants' component={Comellas_Restaurants} />
        <Route path='/shops/Middlesex_Savings_Bank' component={Middlesex_Savings_Bank} />
        <Route path='/shops/Loyal_Companion' component={Loyal_Companion} />
        <Route path='/shops/Quebrada_Baking_Company' component={Quebrada_Baking_Company} />
        <Route path='/shops/Subway' component={Subway} />
        <Route path='/shops/Nails_Studio' component={Nails_Studio} />
        <Route path='/shops/Ideal_Barber_Shop' component={Ideal_Barber_Shop} />
        <Route path='/shops/The_Cats_Hospital' component={The_Cats_Hospital} />
        <Route path='/shops/Nabinas_Threading_and_Spa' component={Nabinas_Threading_and_Spa} />
        <Route path='/shops/Coconut_Thai_Cafe' component={Coconut_Thai_Cafe} />
        <Route path='/shops/Universal_Pediatric_Association' component={Universal_Pediatric_Association} />

      </Switch>

      <Footer />
    </>
  );
}

export default App;
