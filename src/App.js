import React from "react";
import {BrowserRouter, Router, Route} from 'react-router-dom'
import TopHeader from './app/component/top-header';
import MenuSection from './app/component/menu-section';
import MainSection from './app/pages/main-page';
import About from './app/pages/about';
import Contact from './app/pages/contact';
import FooterSection from './app/component/footer';

function App() {
  return (
    <>
      <TopHeader />
      <MenuSection />
        <BrowserRouter>
          <Router>
            <Route path="/" element={<MainSection />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Router>
        </BrowserRouter>
      <FooterSection />
    </>
  );
}

export default App;
