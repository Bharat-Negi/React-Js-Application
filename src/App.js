import React from "react";
import {BrowserRouter, Routes, Route, Redirect} from 'react-router-dom'
import TopHeader from './app/component/top-header';
import MenuSection from './app/component/menu-section';
import MainSection from './app/pages/main-page';
import About from './app/pages/about';
import Contact from './app/pages/contact';
import Shop from './app/pages/shop';
import ShopSiglePage from './app/pages/shop-single';
import FooterSection from './app/component/footer';

function App() {
  return (  
  <BrowserRouter basename="/">
      <TopHeader />
      <MenuSection />
        <Routes>
          <Route exact path="/" element={<MainSection />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/shop-single" element={<ShopSiglePage />} />
        </Routes>
      <FooterSection />
  </BrowserRouter>    
  );
}

export default App;
