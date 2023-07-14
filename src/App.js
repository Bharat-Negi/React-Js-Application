import React from "react";
import {BrowserRouter, Router, Route, Switch, Redirect} from 'react-router-dom'
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
        {/* <BrowserRouter>
          <Router>
            <Switch>
              <Route exact path="/" component={MainSection} />
              <Route exact path="about" component={About} />
              <Route exact path="contact" component={Contact} />
            </Switch>
          </Router>
        </BrowserRouter> */}
      <FooterSection />
    </>
  );
}

export default App;
