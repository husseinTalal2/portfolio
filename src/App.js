import React from 'react';
import Navbar from './containers/Navbar';
import HomePage from './containers/HomePage/HomePage';
import SkillsPage from './containers/SkillsPage/SkillsPage';
import ContactPage from './containers/ContactPage/ContactPage';
import AboutMe from './components/ِAboutPage/AboutMe';
import './index.css';
import Certificates from './components/ِAboutPage/Certificates';
import Testimonials from './components/ِAboutPage/Testimonials';
import CV from './components/ِAboutPage/CV';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/about"
            exact
            component={() => {
              return (
                <>
                  <AboutMe />
                  <Certificates />
                  <Testimonials />
                  <CV />
                </>
              );
            }}
          />
          <Route path="/skills" component={SkillsPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
